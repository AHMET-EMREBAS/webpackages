import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgService } from '@webpackages/clients/ngrx';
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
import { ProductImgMetadata } from '@webpackages/metadata';
import {
  ProductImgFormGroup,
  UpdateProductImgFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-img-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ProductImgService,
    provideFormGroup(ProductImgFormGroup),
    provideInputOptions(toFormInputOptions(ProductImgMetadata)),
  ],
})
export class ProductImgFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-product-img-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ProductImgService,
    provideUpdateFormGroup(UpdateProductImgFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProductImgMetadata)),
  ],
})
export class ProductImgUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
