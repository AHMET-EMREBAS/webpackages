import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { OrderMetadata } from '@webpackages/metadata';
import { OrderFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-order-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    OrderService,
    provideEntityCollectionService(OrderService),
    provideFormGroup(OrderFormGroup),
    provideInputOptions(toFormInputOptions(OrderMetadata)),
  ],
})
export class OrderFormComponent extends FormComponent {}
