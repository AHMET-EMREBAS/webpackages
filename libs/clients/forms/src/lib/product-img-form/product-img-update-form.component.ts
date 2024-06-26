import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ProductImgMetadata } from '@webpackages/metadata';
import { ProductImgUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-img-update-form',
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
    ProductImgService,
    provideEntityCollectionService(ProductImgService),
    provideUpdateFormGroup(ProductImgUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProductImgMetadata)),
  ],
})
export class ProductImgUpdateFormComponent extends UpdateFormComponent {}
