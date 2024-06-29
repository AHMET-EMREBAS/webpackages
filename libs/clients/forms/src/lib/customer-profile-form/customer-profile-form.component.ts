import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerProfileMetadata } from '@webpackages/metadata';
import { CustomerProfileFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-profile-form',
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
    CustomerProfileService,
    provideEntityCollectionService(CustomerProfileService),
    provideFormGroup(CustomerProfileFormGroup),
    provideInputOptions(toFormInputOptions(CustomerProfileMetadata)),
  ],
})
export class CustomerProfileFormComponent extends FormComponent {}
