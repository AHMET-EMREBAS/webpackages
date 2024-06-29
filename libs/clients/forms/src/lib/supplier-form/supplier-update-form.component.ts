import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SupplierMetadata } from '@webpackages/metadata';
import { SupplierUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-supplier-update-form',
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
    SupplierService,
    provideEntityCollectionService(SupplierService),
    provideUpdateFormGroup(SupplierUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(SupplierMetadata)),
  ],
})
export class SupplierUpdateFormComponent extends UpdateFormComponent {}
