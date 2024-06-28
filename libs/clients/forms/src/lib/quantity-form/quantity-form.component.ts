import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityService } from '@webpackages/clients/ngrx';
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
import { QuantityMetadata } from '@webpackages/metadata';
import {
  QuantityFormGroup,
  UpdateQuantityFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-quantity-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    QuantityService,
    provideFormGroup(QuantityFormGroup),
    provideInputOptions(toFormInputOptions(QuantityMetadata)),
  ],
})
export class QuantityFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-quantity-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    QuantityService,
    provideUpdateFormGroup(UpdateQuantityFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(QuantityMetadata)),
  ],
})
export class QuantityUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
