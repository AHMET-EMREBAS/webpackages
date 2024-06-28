import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneService } from '@webpackages/clients/ngrx';
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
import { PhoneMetadata } from '@webpackages/metadata';
import {
  PhoneFormGroup,
  UpdatePhoneFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-phone-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PhoneService,
    provideFormGroup(PhoneFormGroup),
    provideInputOptions(toFormInputOptions(PhoneMetadata)),
  ],
})
export class PhoneFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-phone-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PhoneService,
    provideUpdateFormGroup(UpdatePhoneFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PhoneMetadata)),
  ],
})
export class PhoneUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
