import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerImgService } from '@webpackages/clients/ngrx';
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
import { CustomerImgMetadata } from '@webpackages/metadata';
import {
  CustomerImgFormGroup,
  UpdateCustomerImgFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-img-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    CustomerImgService,
    provideFormGroup(CustomerImgFormGroup),
    provideInputOptions(toFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-customer-img-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CustomerImgService,
    provideUpdateFormGroup(UpdateCustomerImgFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
