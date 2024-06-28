import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
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
import { CustomerProfileMetadata } from '@webpackages/metadata';
import {
  CustomerProfileFormGroup,
  UpdateCustomerProfileFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-profile-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerProfileService,
    provideFormGroup(CustomerProfileFormGroup),
    provideInputOptions(toFormInputOptions(CustomerProfileMetadata)),
  ],
})
export class CustomerProfileFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-profile-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerProfileService,
    provideUpdateFormGroup(UpdateCustomerProfileFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerProfileMetadata)
    ),
  ],
})
export class CustomerProfileUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
