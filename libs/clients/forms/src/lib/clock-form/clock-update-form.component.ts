import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ClockMetadata } from '@webpackages/metadata';
import { ClockUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-clock-update-form',
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
    ClockService,
    provideEntityCollectionService(ClockService),
    provideUpdateFormGroup(ClockUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(ClockMetadata)),
  ],
})
export class ClockUpdateFormComponent extends UpdateFormComponent {}
