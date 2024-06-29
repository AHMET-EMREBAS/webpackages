import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SupplierMetadata } from '@webpackages/metadata';
import { SupplierFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-supplier-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    SupplierService,
    provideEntityCollectionService(SupplierService),
    provideFormGroup(SupplierFormGroup),
    provideInputOptions(toFormInputOptions(SupplierMetadata)),
  ],
})
export class SupplierFormComponent extends FormComponent {}
