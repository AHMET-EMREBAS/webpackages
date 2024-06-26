import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { TaskMetadata } from '@webpackages/metadata';
import { TaskUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-task-update-form',
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
    TaskService,
    provideEntityCollectionService(TaskService),
    provideUpdateFormGroup(TaskUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(TaskMetadata)),
  ],
})
export class TaskUpdateFormComponent extends UpdateFormComponent {}
