import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@webpackages/clients/ngrx';
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
import { CartMetadata } from '@webpackages/metadata';
import {
  CartFormGroup,
  UpdateCartFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-cart-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CartService,
    provideFormGroup(CartFormGroup),
    provideInputOptions(toFormInputOptions(CartMetadata)),
  ],
})
export class CartFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-cart-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CartService,
    provideUpdateFormGroup(UpdateCartFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CartMetadata)),
  ],
})
export class CartUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
