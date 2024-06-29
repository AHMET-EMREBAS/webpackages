import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CategoryMetadata } from '@webpackages/metadata';
import { CategoryRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-category-raw-form',
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
    CategoryService,
    provideEntityCollectionService(CategoryService),
    provideRawFormGroup(CategoryRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CategoryMetadata)),
  ],
})
export class CategoryRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
