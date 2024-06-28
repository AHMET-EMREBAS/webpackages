import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
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
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ProductService,
    provideFormGroup(ProductFormGroup),
    provideInputOptions(toFormInputOptions(ProductMetadata)),
  ],
})
export class ProductFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
