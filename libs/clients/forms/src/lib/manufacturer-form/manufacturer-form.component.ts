import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ManufacturerMetadata } from '@webpackages/metadata';
import { ManufacturerFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-manufacturer-form',
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
    ManufacturerService,
    provideEntityCollectionService(ManufacturerService),
    provideFormGroup(ManufacturerFormGroup),
    provideInputOptions(toFormInputOptions(ManufacturerMetadata)),
  ],
})
export class ManufacturerFormComponent extends FormComponent {}
