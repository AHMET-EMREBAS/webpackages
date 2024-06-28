import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { PurchaseMetadata } from '@webpackages/metadata';
import { PurchaseFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-form',
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
    PurchaseService,
    provideEntityCollectionService(PurchaseService),
    provideFormGroup(PurchaseFormGroup),
    provideInputOptions(toFormInputOptions(PurchaseMetadata)),
  ],
})
export class PurchaseFormComponent extends FormComponent {}
