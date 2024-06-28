import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { PriceMetadata } from '@webpackages/metadata';
import { PriceFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-form',
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
    PriceService,
    provideEntityCollectionService(PriceService),
    provideFormGroup(PriceFormGroup),
    provideInputOptions(toFormInputOptions(PriceMetadata)),
  ],
})
export class PriceFormComponent extends FormComponent {}
