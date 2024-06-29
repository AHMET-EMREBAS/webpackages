import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CustomerImgMetadata } from '@webpackages/metadata';
import { CustomerImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-img-form',
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
    CustomerImgService,
    provideEntityCollectionService(CustomerImgService),
    provideFormGroup(CustomerImgFormGroup),
    provideInputOptions(toFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgFormComponent extends FormComponent {}
