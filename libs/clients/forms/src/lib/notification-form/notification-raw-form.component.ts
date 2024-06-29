import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { NotificationMetadata } from '@webpackages/metadata';
import { NotificationRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-notification-raw-form',
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
    NotificationService,
    provideEntityCollectionService(NotificationService),
    provideRawFormGroup(NotificationRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(NotificationMetadata)),
  ],
})
export class NotificationRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
