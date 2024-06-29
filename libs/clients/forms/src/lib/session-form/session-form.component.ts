import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SessionMetadata } from '@webpackages/metadata';
import { SessionFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-session-form',
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
    SessionService,
    provideEntityCollectionService(SessionService),
    provideFormGroup(SessionFormGroup),
    provideInputOptions(toFormInputOptions(SessionMetadata)),
  ],
})
export class SessionFormComponent extends FormComponent {}
