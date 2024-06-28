import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'wp-product-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form> `,
  providers: [
    ProductService,
    provideEntityCollectionService(ProductService),
    provideUpdateFormGroup(UpdateProductFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProductMetadata)),
  ],
})
export class ProductUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
