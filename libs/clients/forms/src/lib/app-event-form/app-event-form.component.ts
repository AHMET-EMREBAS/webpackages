import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventService } from '@webpackages/clients/ngrx';
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
import { AppEventMetadata } from '@webpackages/metadata';
import {
  AppEventFormGroup,
  UpdateAppEventFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-app-event-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    AppEventService,
    provideFormGroup(AppEventFormGroup),
    provideInputOptions(toFormInputOptions(AppEventMetadata)),
  ],
})
export class AppEventFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-app-event-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    AppEventService,
    provideUpdateFormGroup(UpdateAppEventFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AppEventMetadata)),
  ],
})
export class AppEventUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
