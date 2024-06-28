import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneService } from '@webpackages/clients/ngrx';
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
import { UserPhoneMetadata } from '@webpackages/metadata';
import {
  UserPhoneFormGroup,
  UpdateUserPhoneFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-phone-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    UserPhoneService,
    provideFormGroup(UserPhoneFormGroup),
    provideInputOptions(toFormInputOptions(UserPhoneMetadata)),
  ],
})
export class UserPhoneFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-user-phone-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    UserPhoneService,
    provideUpdateFormGroup(UpdateUserPhoneFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserPhoneMetadata)),
  ],
})
export class UserPhoneUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
