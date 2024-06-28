import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerAccountMetadata } from '@webpackages/metadata';
import { CustomerAccountFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-account-form',
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
    CustomerAccountService,
    provideEntityCollectionService(CustomerAccountService),
    provideFormGroup(CustomerAccountFormGroup),
    provideInputOptions(toFormInputOptions(CustomerAccountMetadata)),
  ],
})
export class CustomerAccountFormComponent extends FormComponent {}
