import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { InboxMetadata } from '@webpackages/metadata';
import { InboxRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp--raw-form',
  standalone: true,
  imports: [CommonModule, RawFormComponent],
  template: `
    <wp-raw-form
      #rawFormRef
      (submittedEvent)="handleFormSubmit($event)"
      [submitButtonLabel]="submitButtonLabel"
      [formStoreName]="formStoreName"
    ></wp-raw-form>
  `,
  providers: [
    InboxService,
    provideEntityCollectionService(InboxService),
    provideUpdateFormGroup(InboxRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(InboxMetadata)),
  ],
})
export class InboxRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
