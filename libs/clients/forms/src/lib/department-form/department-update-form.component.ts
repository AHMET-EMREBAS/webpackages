import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { DepartmentMetadata } from '@webpackages/metadata';
import { DepartmentUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-department-update-form',
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
    DepartmentService,
    provideEntityCollectionService(DepartmentService),
    provideUpdateFormGroup(DepartmentUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(DepartmentMetadata)),
  ],
})
export class DepartmentUpdateFormComponent extends UpdateFormComponent {}
