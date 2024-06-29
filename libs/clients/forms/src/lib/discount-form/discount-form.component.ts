import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { DiscountMetadata } from '@webpackages/metadata';
import { DiscountFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-discount-form',
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
    DiscountService,
    provideEntityCollectionService(DiscountService),
    provideFormGroup(DiscountFormGroup()),
    provideInputOptions(toFormInputOptions(DiscountMetadata)),
  ],
})
export class DiscountFormComponent extends FormComponent {}
