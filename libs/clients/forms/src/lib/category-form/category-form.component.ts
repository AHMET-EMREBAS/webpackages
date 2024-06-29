import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CategoryMetadata } from '@webpackages/metadata';
import { CategoryFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-category-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    CategoryService,
    provideEntityCollectionService(CategoryService),
    provideFormGroup(CategoryFormGroup()),
    provideInputOptions(toFormInputOptions(CategoryMetadata)),
  ],
})
export class CategoryFormComponent extends FormComponent {}
