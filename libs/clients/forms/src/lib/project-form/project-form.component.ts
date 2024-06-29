import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ProjectMetadata } from '@webpackages/metadata';
import { ProjectFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-project-form',
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
    ProjectService,
    provideEntityCollectionService(ProjectService),
    provideFormGroup(ProjectFormGroup()),
    provideInputOptions(toFormInputOptions(ProjectMetadata)),
  ],
})
export class ProjectFormComponent extends FormComponent {}
