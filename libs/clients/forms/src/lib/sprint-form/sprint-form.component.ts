import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintService } from '@webpackages/clients/ngrx';
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
import { SprintMetadata } from '@webpackages/metadata';
import {
  SprintFormGroup,
  UpdateSprintFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sprint-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SprintService,
    provideFormGroup(SprintFormGroup),
    provideInputOptions(toFormInputOptions(SprintMetadata)),
  ],
})
export class SprintFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-sprint-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SprintService,
    provideUpdateFormGroup(UpdateSprintFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SprintMetadata)),
  ],
})
export class SprintUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
