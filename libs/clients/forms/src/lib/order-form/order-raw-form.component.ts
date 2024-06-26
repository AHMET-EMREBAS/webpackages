import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { OrderMetadata } from '@webpackages/metadata';
import { OrderRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-order-raw-form',
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
    OrderService,
    provideEntityCollectionService(OrderService),
    provideRawFormGroup(OrderRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(OrderMetadata)),
  ],
})
export class OrderRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
