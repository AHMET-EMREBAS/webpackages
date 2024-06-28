import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEmailService } from '@webpackages/clients/ngrx';
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
import { CustomerEmailMetadata } from '@webpackages/metadata';
import {
  CustomerEmailFormGroup,
  UpdateCustomerEmailFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-email-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerEmailService,
    provideFormGroup(CustomerEmailFormGroup),
    provideInputOptions(toFormInputOptions(CustomerEmailMetadata)),
  ],
})
export class CustomerEmailFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-email-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerEmailService,
    provideUpdateFormGroup(UpdateCustomerEmailFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerEmailMetadata)),
  ],
})
export class CustomerEmailUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
