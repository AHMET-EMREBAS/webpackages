import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerService } from '@webpackages/clients/ngrx';
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
import { ManufacturerMetadata } from '@webpackages/metadata';
import {
  ManufacturerFormGroup,
  UpdateManufacturerFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-manufacturer-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ManufacturerService,
    provideFormGroup(ManufacturerFormGroup),
    provideInputOptions(toFormInputOptions(ManufacturerMetadata)),
  ],
})
export class ManufacturerFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-manufacturer-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ManufacturerService,
    provideUpdateFormGroup(UpdateManufacturerFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ManufacturerMetadata)),
  ],
})
export class ManufacturerUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
