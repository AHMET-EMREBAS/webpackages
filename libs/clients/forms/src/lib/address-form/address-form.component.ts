import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '@webpackages/clients/ngrx';
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
import { AddressMetadata } from '@webpackages/metadata';
import {
  AddressFormGroup,
  UpdateAddressFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-address-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    AddressService,
    provideFormGroup(AddressFormGroup),
    provideInputOptions(toFormInputOptions(AddressMetadata)),
  ],
})
export class AddressFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-address-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    AddressService,
    provideUpdateFormGroup(UpdateAddressFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AddressMetadata)),
  ],
})
export class AddressUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
