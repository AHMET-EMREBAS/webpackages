import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ProductImgMetadata } from '@webpackages/metadata';
import { ProductImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-img-form',
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
    ProductImgService,
    provideEntityCollectionService(ProductImgService),
    provideFormGroup(ProductImgFormGroup),
    provideInputOptions(toFormInputOptions(ProductImgMetadata)),
  ],
})
export class ProductImgFormComponent extends FormComponent {}
