import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProductMetadata } from '@webpackages/metadata';
import { ProductRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-product-raw-form',
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
    ProductService,
    provideEntityCollectionService(ProductService),
    provideRawFormGroup(ProductRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(ProductMetadata)),
  ],
})
export class ProductRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
