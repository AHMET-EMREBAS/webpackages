import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import { PurchaseOrderFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-order-form',
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
    PurchaseOrderService,
    provideEntityCollectionService(PurchaseOrderService),
    provideFormGroup(PurchaseOrderFormGroup),
    provideInputOptions(toFormInputOptions(PurchaseOrderMetadata)),
  ],
})
export class PurchaseOrderFormComponent extends FormComponent {}
