import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailService } from '@webpackages/clients/ngrx';
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
import { UserEmailMetadata } from '@webpackages/metadata';
import {
  UserEmailFormGroup,
  UpdateUserEmailFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-email-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    UserEmailService,
    provideFormGroup(UserEmailFormGroup),
    provideInputOptions(toFormInputOptions(UserEmailMetadata)),
  ],
})
export class UserEmailFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-user-email-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    UserEmailService,
    provideUpdateFormGroup(UpdateUserEmailFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserEmailMetadata)),
  ],
})
export class UserEmailUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
