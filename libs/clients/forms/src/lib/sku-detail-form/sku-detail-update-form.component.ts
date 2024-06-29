import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuDetailService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SkuDetailMetadata } from '@webpackages/metadata';
import { UpdateSkuDetailFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-detail-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    SkuDetailService,
    provideEntityCollectionService(SkuDetailService),
    provideUpdateFormGroup(UpdateSkuDetailFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SkuDetailMetadata)),
  ],
})
export class SkuDetailUpdateFormComponent extends UpdateFormComponent {}
