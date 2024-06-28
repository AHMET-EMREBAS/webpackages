import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '@webpackages/clients/ngrx';
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
import { PriceMetadata } from '@webpackages/metadata';
import {
  PriceFormGroup,
  UpdatePriceFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PriceService,
    provideFormGroup(PriceFormGroup),
    provideInputOptions(toFormInputOptions(PriceMetadata)),
  ],
})
export class PriceFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-price-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PriceService,
    provideUpdateFormGroup(UpdatePriceFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PriceMetadata)),
  ],
})
export class PriceUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
