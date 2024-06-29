import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ProjectMetadata } from '@webpackages/metadata';
import { UpdateProjectFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-project-update-form',
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
    ProjectService,
    provideEntityCollectionService(ProjectService),
    provideUpdateFormGroup(UpdateProjectFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProjectMetadata)),
  ],
})
export class ProjectUpdateFormComponent extends UpdateFormComponent {}
