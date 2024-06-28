import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ClockMetadata } from '@webpackages/metadata';
import { ClockFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-clock-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    ClockService,
    provideEntityCollectionService(ClockService),
    provideFormGroup(ClockFormGroup),
    provideInputOptions(toFormInputOptions(ClockMetadata)),
  ],
})
export class ClockFormComponent extends FormComponent {}
