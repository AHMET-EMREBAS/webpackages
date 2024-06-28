import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '@webpackages/clients/ngrx';
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
import { SaleMetadata } from '@webpackages/metadata';
import {
  SaleFormGroup,
  UpdateSaleFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sale-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SaleService,
    provideFormGroup(SaleFormGroup),
    provideInputOptions(toFormInputOptions(SaleMetadata)),
  ],
})
export class SaleFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-sale-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SaleService,
    provideUpdateFormGroup(UpdateSaleFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SaleMetadata)),
  ],
})
export class SaleUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
