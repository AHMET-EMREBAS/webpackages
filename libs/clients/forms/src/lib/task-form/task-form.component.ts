import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '@webpackages/clients/ngrx';
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
import { TaskMetadata } from '@webpackages/metadata';
import {
  TaskFormGroup,
  UpdateTaskFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-task-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    TaskService,
    provideFormGroup(TaskFormGroup),
    provideInputOptions(toFormInputOptions(TaskMetadata)),
  ],
})
export class TaskFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-task-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    TaskService,
    provideUpdateFormGroup(UpdateTaskFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(TaskMetadata)),
  ],
})
export class TaskUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
