import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { NotificationMetadata } from '@webpackages/metadata';
import { UpdateNotificationFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-notification-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    NotificationService,
    provideEntityCollectionService(NotificationService),
    provideUpdateFormGroup(UpdateNotificationFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(NotificationMetadata)),
  ],
})
export class NotificationUpdateFormComponent extends UpdateFormComponent {}
