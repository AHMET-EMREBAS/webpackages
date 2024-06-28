import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialNumberService } from '@webpackages/clients/ngrx';
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
import { SerialNumberMetadata } from '@webpackages/metadata';
import {
  SerialNumberFormGroup,
  UpdateSerialNumberFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-serial-number-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SerialNumberService,
    provideFormGroup(SerialNumberFormGroup),
    provideInputOptions(toFormInputOptions(SerialNumberMetadata)),
  ],
})
export class SerialNumberFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-serial-number-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SerialNumberService,
    provideUpdateFormGroup(UpdateSerialNumberFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SerialNumberMetadata)),
  ],
})
export class SerialNumberUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
