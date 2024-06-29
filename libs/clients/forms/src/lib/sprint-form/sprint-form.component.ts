import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SprintMetadata } from '@webpackages/metadata';
import { SprintFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sprint-form',
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
    SprintService,
    provideEntityCollectionService(SprintService),
    provideFormGroup(SprintFormGroup),
    provideInputOptions(toFormInputOptions(SprintMetadata)),
  ],
})
export class SprintFormComponent extends FormComponent {}
