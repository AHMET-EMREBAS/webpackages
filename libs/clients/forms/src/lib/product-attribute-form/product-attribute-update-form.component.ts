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
import { ProductAttributeUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-attribute-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `
    <wp-update-form
      (submittedEvent)="handleFormSubmit($event)"
      [entityId]="entityId"
      [onlyEmitEvent]="onlyEmitEvent"
      [submitButtonLabel]="submitButtonLabel"
      (submittedEventSuccess)="handleFormSubmitSuccess($event)"
      (submittedEventError)="handleFormSubmitError($event)"
      [formStoreName]="formStoreName"
    ></wp-update-form>
  `,
  providers: [
    ProductAttributeService,
    provideEntityCollectionService(ProductAttributeService),
    provideUpdateFormGroup(ProductAttributeUpdateFormGroup()),
    provideUpdateInputOptions(
      toUpdateFormInputOptions(ProductAttributeMetadata)
    ),
  ],
})
export class ProductAttributeUpdateFormComponent extends UpdateFormComponent {}
