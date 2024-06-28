import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { PhoneMetadata } from '@webpackages/metadata';
import { PhoneFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-phone-form',
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
    PhoneService,
    provideEntityCollectionService(PhoneService),
    provideFormGroup(PhoneFormGroup),
    provideInputOptions(toFormInputOptions(PhoneMetadata)),
  ],
})
export class PhoneFormComponent extends FormComponent {}
