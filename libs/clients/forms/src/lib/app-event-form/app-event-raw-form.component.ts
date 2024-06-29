import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { AppEventMetadata } from '@webpackages/metadata';
import { AppEventRawFormGroup } from '@webpackages/clients/form-groups';

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
    AppEventService,
    provideEntityCollectionService(AppEventService),
    provideUpdateFormGroup(AppEventRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(AppEventMetadata)),
  ],
})
export class AppEventRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
