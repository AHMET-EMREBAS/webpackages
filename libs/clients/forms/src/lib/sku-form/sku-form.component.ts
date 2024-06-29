import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { SkuMetadata } from '@webpackages/metadata';
import { SkuFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-form',
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
    SkuService,
    provideEntityCollectionService(SkuService),
    provideFormGroup(SkuFormGroup),
    provideInputOptions(toFormInputOptions(SkuMetadata)),
  ],
})
export class SkuFormComponent extends FormComponent {}
