import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@webpackages/clients/ngrx';
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
import { CustomerMetadata } from '@webpackages/metadata';
import {
  CustomerFormGroup,
  UpdateCustomerFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerService,
    provideFormGroup(CustomerFormGroup),
    provideInputOptions(toFormInputOptions(CustomerMetadata)),
  ],
})
export class CustomerFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerService,
    provideUpdateFormGroup(UpdateCustomerFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerMetadata)),
  ],
})
export class CustomerUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
