import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerAddressMetadata } from '@webpackages/metadata';
import { UpdateCustomerAddressFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-address-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerAddressService,
    provideEntityCollectionService(CustomerAddressService),
    provideUpdateFormGroup(UpdateCustomerAddressFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerAddressMetadata)
    ),
  ],
})
export class CustomerAddressUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}