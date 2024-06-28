import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { QuantityMetadata } from '@webpackages/metadata';
import { QuantityFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-quantity-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    QuantityService,
    provideEntityCollectionService(QuantityService),
    provideFormGroup(QuantityFormGroup),
    provideInputOptions(toFormInputOptions(QuantityMetadata)),
  ],
})
export class QuantityFormComponent extends FormComponent {}
