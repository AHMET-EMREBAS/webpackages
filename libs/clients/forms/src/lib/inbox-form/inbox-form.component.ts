import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { InboxMetadata } from '@webpackages/metadata';
import { InboxFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-inbox-form',
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
    InboxService,
    provideEntityCollectionService(InboxService),
    provideFormGroup(InboxFormGroup()),
    provideInputOptions(toFormInputOptions(InboxMetadata)),
  ],
})
export class InboxFormComponent extends FormComponent {}
