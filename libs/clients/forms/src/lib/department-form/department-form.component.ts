import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { DepartmentMetadata } from '@webpackages/metadata';
import { DepartmentFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-department-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    DepartmentService,
    provideEntityCollectionService(DepartmentService),
    provideFormGroup(DepartmentFormGroup),
    provideInputOptions(toFormInputOptions(DepartmentMetadata)),
  ],
})
export class DepartmentFormComponent extends FormComponent {}
