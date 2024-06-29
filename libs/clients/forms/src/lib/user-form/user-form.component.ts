import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserMetadata } from '@webpackages/metadata';
import { UserFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-form',
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
    UserService,
    provideEntityCollectionService(UserService),
    provideFormGroup(UserFormGroup),
    provideInputOptions(toFormInputOptions(UserMetadata)),
  ],
})
export class UserFormComponent extends FormComponent {}
