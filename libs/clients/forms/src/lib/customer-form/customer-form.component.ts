import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerMetadata } from '@webpackages/metadata';
import { CustomerFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    CustomerService,
    provideEntityCollectionService(CustomerService),
    provideFormGroup(CustomerFormGroup),
    provideInputOptions(toFormInputOptions(CustomerMetadata)),
  ],
})
export class CustomerFormComponent extends FormComponent {}
