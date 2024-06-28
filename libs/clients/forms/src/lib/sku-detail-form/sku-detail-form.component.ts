import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuDetailService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SkuDetailMetadata } from '@webpackages/metadata';
import { SkuDetailFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-detail-form',
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
    SkuDetailService,
    provideEntityCollectionService(SkuDetailService),
    provideFormGroup(SkuDetailFormGroup),
    provideInputOptions(toFormInputOptions(SkuDetailMetadata)),
  ],
})
export class SkuDetailFormComponent extends FormComponent {}
