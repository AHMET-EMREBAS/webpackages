import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { CategoryMetadata } from '@webpackages/metadata';
import {
  CategoryFormGroup,
  UpdateCategoryFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-category-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CategoryService,
    provideFormGroup(CategoryFormGroup),
    provideInputOptions(toFormInputOptions(CategoryMetadata)),
  ],
})
export class CategoryFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-category-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CategoryService,
    provideUpdateFormGroup(UpdateCategoryFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CategoryMetadata)),
  ],
})
export class CategoryUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}