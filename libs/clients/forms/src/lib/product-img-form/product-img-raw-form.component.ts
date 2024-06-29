import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProductImgMetadata } from '@webpackages/metadata';
import { ProductImgRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-img-raw-form',
  standalone: true,
  imports: [CommonModule, RawFormComponent],
  template: `
    <wp-raw-form
      #rawFormRef
      (submittedEvent)="handleFormSubmit($event)"
      [submitButtonLabel]="submitButtonLabel"
      [formStoreName]="formStoreName"
    ></wp-raw-form>
  `,
  providers: [
    ProductImgService,
    provideEntityCollectionService(ProductImgService),
    provideRawFormGroup(ProductImgRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(ProductImgMetadata)),
  ],
})
export class ProductImgRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
