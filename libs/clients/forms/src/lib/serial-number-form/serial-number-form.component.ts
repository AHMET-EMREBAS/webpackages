import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialNumberService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SerialNumberMetadata } from '@webpackages/metadata';
import { SerialNumberFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-serial-number-form',
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
    SerialNumberService,
    provideEntityCollectionService(SerialNumberService),
    provideFormGroup(SerialNumberFormGroup),
    provideInputOptions(toFormInputOptions(SerialNumberMetadata)),
  ],
})
export class SerialNumberFormComponent extends FormComponent {}
