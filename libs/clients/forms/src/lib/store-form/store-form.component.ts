import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@webpackages/clients/ngrx';
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
import { StoreMetadata } from '@webpackages/metadata';
import {
  StoreFormGroup,
  UpdateStoreFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-store-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    StoreService,
    provideFormGroup(StoreFormGroup),
    provideInputOptions(toFormInputOptions(StoreMetadata)),
  ],
})
export class StoreFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-store-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    StoreService,
    provideUpdateFormGroup(UpdateStoreFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(StoreMetadata)),
  ],
})
export class StoreUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
