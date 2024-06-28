import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '@webpackages/clients/ngrx';
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
import { PurchaseMetadata } from '@webpackages/metadata';
import {
  PurchaseFormGroup,
  UpdatePurchaseFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PurchaseService,
    provideFormGroup(PurchaseFormGroup),
    provideInputOptions(toFormInputOptions(PurchaseMetadata)),
  ],
})
export class PurchaseFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-purchase-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PurchaseService,
    provideUpdateFormGroup(UpdatePurchaseFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PurchaseMetadata)),
  ],
})
export class PurchaseUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
