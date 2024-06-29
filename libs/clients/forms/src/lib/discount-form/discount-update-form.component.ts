import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { DiscountMetadata } from '@webpackages/metadata';
import { DiscountUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-discount-update-form',
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
    DiscountService,
    provideEntityCollectionService(DiscountService),
    provideUpdateFormGroup(DiscountUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(DiscountMetadata)),
  ],
})
export class DiscountUpdateFormComponent extends UpdateFormComponent {}
