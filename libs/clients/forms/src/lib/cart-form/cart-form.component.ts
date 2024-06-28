import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { CartMetadata } from '@webpackages/metadata';
import { CartFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-cart-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CartService,
    provideEntityCollectionService(CartService),
    provideFormGroup(CartFormGroup),
    provideInputOptions(toFormInputOptions(CartMetadata)),
  ],
})
export class CartFormComponent extends FormComponent {}
