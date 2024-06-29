import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { TaskMetadata } from '@webpackages/metadata';
import { TaskRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-task-raw-form',
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
    TaskService,
    provideEntityCollectionService(TaskService),
    provideRawFormGroup(TaskRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(TaskMetadata)),
  ],
})
export class TaskRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
