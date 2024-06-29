import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserEmailMetadata } from '@webpackages/metadata';
import { UserEmailFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-email-form',
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
    UserEmailService,
    provideEntityCollectionService(UserEmailService),
    provideFormGroup(UserEmailFormGroup()),
    provideInputOptions(toFormInputOptions(UserEmailMetadata)),
  ],
})
export class UserEmailFormComponent extends FormComponent {}
