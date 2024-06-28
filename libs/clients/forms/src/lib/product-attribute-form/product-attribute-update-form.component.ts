import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAttributeService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ProductAttributeMetadata } from '@webpackages/metadata';
import { UpdateProductAttributeFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-attribute-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ProductAttributeService,
    provideEntityCollectionService(ProductAttributeService),
    provideUpdateFormGroup(UpdateProductAttributeFormGroup),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(ProductAttributeMetadata)
    ),
  ],
})
export class ProductAttributeUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}