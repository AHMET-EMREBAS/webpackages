import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountService } from '@webpackages/clients/ngrx';
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
import { DiscountMetadata } from '@webpackages/metadata';
import {
  DiscountFormGroup,
  UpdateDiscountFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-discount-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    DiscountService,
    provideFormGroup(DiscountFormGroup),
    provideInputOptions(toFormInputOptions(DiscountMetadata)),
  ],
})
export class DiscountFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-discount-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    DiscountService,
    provideUpdateFormGroup(UpdateDiscountFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(DiscountMetadata)),
  ],
})
export class DiscountUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
