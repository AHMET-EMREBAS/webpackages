import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { EmailMetadata } from '@webpackages/metadata';
import { EmailFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-email-form',
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
    EmailService,
    provideEntityCollectionService(EmailService),
    provideFormGroup(EmailFormGroup),
    provideInputOptions(toFormInputOptions(EmailMetadata)),
  ],
})
export class EmailFormComponent extends FormComponent {}
