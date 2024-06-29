import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SprintMetadata } from '@webpackages/metadata';
import { UpdateSprintFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sprint-update-form',
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
    SprintService,
    provideEntityCollectionService(SprintService),
    provideUpdateFormGroup(UpdateSprintFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SprintMetadata)),
  ],
})
export class SprintUpdateFormComponent extends UpdateFormComponent {}
