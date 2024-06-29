import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { InboxMetadata } from '@webpackages/metadata';
import { InboxRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-inbox-raw-form',
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
    provideRawFormGroup(InboxRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(InboxMetadata)),
  ],
})
export class InboxRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
