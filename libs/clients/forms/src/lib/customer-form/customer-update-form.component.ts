import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerMetadata } from '@webpackages/metadata';
import { UpdateCustomerFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    CustomerService,
    provideEntityCollectionService(CustomerService),
    provideUpdateFormGroup(UpdateCustomerFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerMetadata)),
  ],
})
export class CustomerUpdateFormComponent extends UpdateFormComponent {}
