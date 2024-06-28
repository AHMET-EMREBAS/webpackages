import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ProductMetadata } from '@webpackages/metadata';
import { UpdateProductFormGroup } from '@webpackages/clients/form-groups';
import { IProduct } from '@webpackages/models';

@Component({
  selector: 'wp-product-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (formSubmitEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ProductService,
    provideEntityCollectionService(ProductService),
    provideUpdateFormGroup(UpdateProductFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProductMetadata)),
  ],
})
export class ProductUpdateFormComponent extends UpdateFormComponent {
  override async handleFormSubmit(event?: Partial<IProduct>) {
    this.formSubmitEvent.emit(event);
  }
}
