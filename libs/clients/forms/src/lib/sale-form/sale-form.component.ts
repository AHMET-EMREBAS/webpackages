import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SaleMetadata } from '@webpackages/metadata';
import { SaleFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sale-form',
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
    SaleService,
    provideEntityCollectionService(SaleService),
    provideFormGroup(SaleFormGroup),
    provideInputOptions(toFormInputOptions(SaleMetadata)),
  ],
})
export class SaleFormComponent extends FormComponent {}
