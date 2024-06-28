import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressService } from '@webpackages/clients/ngrx';
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
import { UserAddressMetadata } from '@webpackages/metadata';
import {
  UserAddressFormGroup,
  UpdateUserAddressFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-address-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    UserAddressService,
    provideFormGroup(UserAddressFormGroup),
    provideInputOptions(toFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-user-address-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    UserAddressService,
    provideUpdateFormGroup(UpdateUserAddressFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
