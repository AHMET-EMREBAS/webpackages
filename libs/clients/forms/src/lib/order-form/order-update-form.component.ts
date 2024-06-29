import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { OrderMetadata } from '@webpackages/metadata';
import { OrderUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-order-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `
    <wp-update-form
      (submittedEvent)="handleFormSubmit($event)"
      [entityId]="entityId"
      [onlyEmitEvent]="onlyEmitEvent"
      [submitButtonLabel]="submitButtonLabel"
      (submittedEventSuccess)="handleFormSubmitSuccess($event)"
      (submittedEventError)="handleFormSubmitError($event)"
      [formStoreName]="formStoreName"
    ></wp-update-form>
  `,
  providers: [
    OrderService,
    provideEntityCollectionService(OrderService),
    provideUpdateFormGroup(OrderUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(OrderMetadata)),
  ],
})
export class OrderUpdateFormComponent extends UpdateFormComponent {}
