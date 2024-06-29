import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import { CustomerPhoneFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-phone-form',
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
    CustomerPhoneService,
    provideEntityCollectionService(CustomerPhoneService),
    provideFormGroup(CustomerPhoneFormGroup),
    provideInputOptions(toFormInputOptions(CustomerPhoneMetadata)),
  ],
})
export class CustomerPhoneFormComponent extends FormComponent {}
