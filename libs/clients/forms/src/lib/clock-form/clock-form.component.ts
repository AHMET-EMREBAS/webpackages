import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockService } from '@webpackages/clients/ngrx';
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
import { ClockMetadata } from '@webpackages/metadata';
import {
  ClockFormGroup,
  UpdateClockFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-clock-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ClockService,
    provideFormGroup(ClockFormGroup),
    provideInputOptions(toFormInputOptions(ClockMetadata)),
  ],
})
export class ClockFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-clock-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ClockService,
    provideUpdateFormGroup(UpdateClockFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ClockMetadata)),
  ],
})
export class ClockUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
