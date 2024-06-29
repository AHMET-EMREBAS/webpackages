import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import { UpdatePurchaseOrderFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-order-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    PurchaseOrderService,
    provideEntityCollectionService(PurchaseOrderService),
    provideUpdateFormGroup(UpdatePurchaseOrderFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(PurchaseOrderMetadata)),
  ],
})
export class PurchaseOrderUpdateFormComponent extends UpdateFormComponent {}
