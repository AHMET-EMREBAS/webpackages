import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerAddressMetadata } from '@webpackages/metadata';
import { CustomerAddressFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-address-form',
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
    CustomerAddressService,
    provideEntityCollectionService(CustomerAddressService),
    provideFormGroup(CustomerAddressFormGroup()),
    provideInputOptions(toFormInputOptions(CustomerAddressMetadata)),
  ],
})
export class CustomerAddressFormComponent extends FormComponent {}
