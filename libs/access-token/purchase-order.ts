import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import {
  PurchaseOrderFormGroup,
  UpdatePurchaseOrderFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-order-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PurchaseOrderService,
    provideFormGroup(PurchaseOrderFormGroup),
    provideInputOptions(toFormInputOptions(PurchaseOrderMetadata)),
  ],
})
export class PurchaseOrderFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-purchase-order-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PurchaseOrderService,
    provideUpdateFormGroup(UpdatePurchaseOrderFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PurchaseOrderMetadata)),
  ],
})
export class PurchaseOrderUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
