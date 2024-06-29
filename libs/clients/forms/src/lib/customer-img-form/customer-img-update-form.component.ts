import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CustomerImgMetadata } from '@webpackages/metadata';
import { UpdateCustomerImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-img-update-form',
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
    CustomerImgService,
    provideEntityCollectionService(CustomerImgService),
    provideUpdateFormGroup(UpdateCustomerImgFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgUpdateFormComponent extends UpdateFormComponent {}
