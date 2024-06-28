import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerProfileMetadata } from '@webpackages/metadata';
import { UpdateCustomerProfileFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-profile-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerProfileService,
    provideEntityCollectionService(CustomerProfileService),
    provideUpdateFormGroup(UpdateCustomerProfileFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(CustomerProfileMetadata)
    ),
  ],
})
export class CustomerProfileUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
