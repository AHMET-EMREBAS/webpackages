import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEmailService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerEmailMetadata } from '@webpackages/metadata';
import { CustomerEmailFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-email-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerEmailService,
    provideEntityCollectionService(CustomerEmailService),
    provideFormGroup(CustomerEmailFormGroup),
    provideInputOptions(toFormInputOptions(CustomerEmailMetadata)),
  ],
})
export class CustomerEmailFormComponent extends FormComponent {}
