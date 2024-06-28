import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
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
import { CustomerAddressMetadata } from '@webpackages/metadata';
import {
  CustomerAddressFormGroup,
  UpdateCustomerAddressFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-address-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerAddressService,
    provideFormGroup(CustomerAddressFormGroup),
    provideInputOptions(toFormInputOptions(CustomerAddressMetadata)),
  ],
})
export class CustomerAddressFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-address-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerAddressService,
    provideUpdateFormGroup(UpdateCustomerAddressFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerAddressMetadata)
    ),
  ],
})
export class CustomerAddressUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
