import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '@webpackages/clients/ngrx';
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
import { DepartmentMetadata } from '@webpackages/metadata';
import {
  DepartmentFormGroup,
  UpdateDepartmentFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-department-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    DepartmentService,
    provideFormGroup(DepartmentFormGroup),
    provideInputOptions(toFormInputOptions(DepartmentMetadata)),
  ],
})
export class DepartmentFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-department-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    DepartmentService,
    provideUpdateFormGroup(UpdateDepartmentFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(DepartmentMetadata)),
  ],
})
export class DepartmentUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
