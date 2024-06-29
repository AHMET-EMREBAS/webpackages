import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SkuMetadata } from '@webpackages/metadata';
import { SkuUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `
    <wp-update-form
      (submittedEvent)="handleFormSubmit($event)"
      [entityId]="entityId"
      [onlyEmitEvent]="onlyEmitEvent"
      [submitButtonLabel]="submitButtonLabel"
      (submittedEventSuccess)="handleFormSubmitSuccess($event)"
      (submittedEventError)="handleFormSubmitError($event)"
      [formStoreName]="formStoreName"
    ></wp-update-form>
  `,
  providers: [
    SkuService,
    provideEntityCollectionService(SkuService),
    provideUpdateFormGroup(SkuUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(SkuMetadata)),
  ],
})
export class SkuUpdateFormComponent extends UpdateFormComponent {}
