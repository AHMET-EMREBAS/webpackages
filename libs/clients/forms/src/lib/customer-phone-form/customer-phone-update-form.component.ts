import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import { CustomerPhoneUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-phone-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `
    <wp-update-form
      (submittedEvent)="handleFormSubmit($event)"
      [entityId]="entityId"
      [onlyEmitEvent]="onlyEmitEvent"
      [submitButtonLabel]="submitButtonLabel"
      (submittedEventSuccess)="handleFormSubmitSuccess($event)"
      (submittedEventError)="handleFormSubmitError($event)"
      [formStoreName]="formStoreName"
    ></wp-update-form>
  `,
  providers: [
    CustomerPhoneService,
    provideEntityCollectionService(CustomerPhoneService),
    provideUpdateFormGroup(CustomerPhoneUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerPhoneMetadata)),
  ],
})
export class CustomerPhoneUpdateFormComponent extends UpdateFormComponent {}
