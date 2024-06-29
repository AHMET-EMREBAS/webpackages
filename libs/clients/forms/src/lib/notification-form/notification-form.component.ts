import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { NotificationMetadata } from '@webpackages/metadata';
import { NotificationFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-notification-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    NotificationService,
    provideEntityCollectionService(NotificationService),
    provideFormGroup(NotificationFormGroup),
    provideInputOptions(toFormInputOptions(NotificationMetadata)),
  ],
})
export class NotificationFormComponent extends FormComponent {}
