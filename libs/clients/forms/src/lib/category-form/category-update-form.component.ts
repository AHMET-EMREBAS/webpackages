import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CategoryMetadata } from '@webpackages/metadata';
import { UpdateCategoryFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-category-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    CategoryService,
    provideEntityCollectionService(CategoryService),
    provideUpdateFormGroup(UpdateCategoryFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CategoryMetadata)),
  ],
})
export class CategoryUpdateFormComponent extends UpdateFormComponent {}
