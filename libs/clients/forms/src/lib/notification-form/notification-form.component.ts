import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { NotificationMetadata } from '@webpackages/metadata';
import {
  NotificationFormGroup,
  UpdateNotificationFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-notification-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    NotificationService,
    provideFormGroup(NotificationFormGroup),
    provideInputOptions(toFormInputOptions(NotificationMetadata)),
  ],
})
export class NotificationFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-notification-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    NotificationService,
    provideUpdateFormGroup(UpdateNotificationFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(NotificationMetadata)),
  ],
})
export class NotificationUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
