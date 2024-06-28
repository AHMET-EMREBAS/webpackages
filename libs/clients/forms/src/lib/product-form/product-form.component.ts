import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ProductMetadata } from '@webpackages/metadata';
import { ProductFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    ProductService,
    provideEntityCollectionService(ProductService),
    provideFormGroup(ProductFormGroup),
    provideInputOptions(toFormInputOptions(ProductMetadata)),
  ],
})
export class ProductFormComponent extends FormComponent {}
