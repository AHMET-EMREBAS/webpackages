import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAttributeService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ProductAttributeMetadata } from '@webpackages/metadata';
import { ProductAttributeFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-attribute-form',
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
    ProductAttributeService,
    provideEntityCollectionService(ProductAttributeService),
    provideFormGroup(ProductAttributeFormGroup),
    provideInputOptions(toFormInputOptions(ProductAttributeMetadata)),
  ],
})
export class ProductAttributeFormComponent extends FormComponent {}
