import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { OrganizationMetadata } from '@webpackages/metadata';
import { OrganizationUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-organization-update-form',
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
    OrganizationService,
    provideEntityCollectionService(OrganizationService),
    provideUpdateFormGroup(OrganizationUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationUpdateFormComponent extends UpdateFormComponent {}
