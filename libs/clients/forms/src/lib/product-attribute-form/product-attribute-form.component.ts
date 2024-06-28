import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAttributeService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { ProductAttributeMetadata } from '@webpackages/metadata';
import {
  ProductAttributeFormGroup,
  UpdateProductAttributeFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-attribute-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ProductAttributeService,
    provideFormGroup(ProductAttributeFormGroup),
    provideInputOptions(toFormInputOptions(ProductAttributeMetadata)),
  ],
})
export class ProductAttributeFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-product-attribute-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ProductAttributeService,
    provideUpdateFormGroup(UpdateProductAttributeFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(ProductAttributeMetadata)
    ),
  ],
})
export class ProductAttributeUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
