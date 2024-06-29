import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PriceLevelMetadata } from '@webpackages/metadata';
import { PriceLevelUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-level-update-form',
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
    PriceLevelService,
    provideEntityCollectionService(PriceLevelService),
    provideUpdateFormGroup(PriceLevelUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(PriceLevelMetadata)),
  ],
})
export class PriceLevelUpdateFormComponent extends UpdateFormComponent {}
