import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import { PurchaseOrderRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-order-raw-form',
  standalone: true,
  imports: [CommonModule, RawFormComponent],
  template: `
    <wp-raw-form
      #rawFormRef
      (submittedEvent)="handleFormSubmit($event)"
      [submitButtonLabel]="submitButtonLabel"
      [formStoreName]="formStoreName"
    ></wp-raw-form>
  `,
  providers: [
    PurchaseOrderService,
    provideEntityCollectionService(PurchaseOrderService),
    provideRawFormGroup(PurchaseOrderRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(PurchaseOrderMetadata)),
  ],
})
export class PurchaseOrderRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
