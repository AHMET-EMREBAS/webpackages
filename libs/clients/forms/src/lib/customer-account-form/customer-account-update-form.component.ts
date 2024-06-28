import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerAccountMetadata } from '@webpackages/metadata';
import { UpdateCustomerAccountFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-account-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-update-form>`,
  providers: [
    CustomerAccountService,
    provideEntityCollectionService(CustomerAccountService),
    provideUpdateFormGroup(UpdateCustomerAccountFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerAccountMetadata)
    ),
  ],
})
export class CustomerAccountUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
