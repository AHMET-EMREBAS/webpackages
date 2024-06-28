import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { MessageMetadata } from '@webpackages/metadata';
import { MessageFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-message-form',
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
    MessageService,
    provideEntityCollectionService(MessageService),
    provideFormGroup(MessageFormGroup),
    provideInputOptions(toFormInputOptions(MessageMetadata)),
  ],
})
export class MessageFormComponent extends FormComponent {}
