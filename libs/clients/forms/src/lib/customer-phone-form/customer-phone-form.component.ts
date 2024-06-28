import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
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
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import {
  CustomerPhoneFormGroup,
  UpdateCustomerPhoneFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-phone-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerPhoneService,
    provideFormGroup(CustomerPhoneFormGroup),
    provideInputOptions(toFormInputOptions(CustomerPhoneMetadata)),
  ],
})
export class CustomerPhoneFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-customer-phone-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerPhoneService,
    provideUpdateFormGroup(UpdateCustomerPhoneFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerPhoneMetadata)),
  ],
})
export class CustomerPhoneUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
