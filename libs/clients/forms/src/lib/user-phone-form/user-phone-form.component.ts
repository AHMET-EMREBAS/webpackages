import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserPhoneMetadata } from '@webpackages/metadata';
import { UserPhoneFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-phone-form',
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
    UserPhoneService,
    provideEntityCollectionService(UserPhoneService),
    provideFormGroup(UserPhoneFormGroup),
    provideInputOptions(toFormInputOptions(UserPhoneMetadata)),
  ],
})
export class UserPhoneFormComponent extends FormComponent {}
