import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { AppEventMetadata } from '@webpackages/metadata';
import { AppEventFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-app-event-form',
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
    AppEventService,
    provideEntityCollectionService(AppEventService),
    provideFormGroup(AppEventFormGroup),
    provideInputOptions(toFormInputOptions(AppEventMetadata)),
  ],
})
export class AppEventFormComponent extends FormComponent {}
