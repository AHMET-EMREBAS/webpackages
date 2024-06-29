import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { TaskMetadata } from '@webpackages/metadata';
import { TaskFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-task-form',
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
    TaskService,
    provideEntityCollectionService(TaskService),
    provideFormGroup(TaskFormGroup),
    provideInputOptions(toFormInputOptions(TaskMetadata)),
  ],
})
export class TaskFormComponent extends FormComponent {}
