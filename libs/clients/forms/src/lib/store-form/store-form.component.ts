import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { StoreMetadata } from '@webpackages/metadata';
import { StoreFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-store-form',
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
    StoreService,
    provideEntityCollectionService(StoreService),
    provideFormGroup(StoreFormGroup),
    provideInputOptions(toFormInputOptions(StoreMetadata)),
  ],
})
export class StoreFormComponent extends FormComponent {}
