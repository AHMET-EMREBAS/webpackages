import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '@webpackages/clients/ngrx';
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
import { OrderMetadata } from '@webpackages/metadata';
import {
  OrderFormGroup,
  UpdateOrderFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-order-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    OrderService,
    provideFormGroup(OrderFormGroup),
    provideInputOptions(toFormInputOptions(OrderMetadata)),
  ],
})
export class OrderFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-order-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    OrderService,
    provideUpdateFormGroup(UpdateOrderFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(OrderMetadata)),
  ],
})
export class OrderUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
