import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
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
import { CustomerAccountMetadata } from '@webpackages/metadata';
import {
  CustomerAccountFormGroup,
  UpdateCustomerAccountFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-account-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerAccountService,
    provideFormGroup(CustomerAccountFormGroup),
    provideInputOptions(toFormInputOptions(CustomerAccountMetadata)),
  ],
})
export class CustomerAccountFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-account-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerAccountService,
    provideUpdateFormGroup(UpdateCustomerAccountFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerAccountMetadata)
    ),
  ],
})
export class CustomerAccountUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
