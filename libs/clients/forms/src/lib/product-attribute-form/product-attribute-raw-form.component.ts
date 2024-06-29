import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAttributeService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProductAttributeMetadata } from '@webpackages/metadata';
import { ProductAttributeRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp--raw-form',
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
    ProductAttributeService,
    provideEntityCollectionService(ProductAttributeService),
    provideUpdateFormGroup(ProductAttributeRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(ProductAttributeMetadata)),
  ],
})
export class ProductAttributeRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
