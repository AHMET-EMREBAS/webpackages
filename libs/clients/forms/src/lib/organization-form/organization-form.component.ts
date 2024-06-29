import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { OrganizationMetadata } from '@webpackages/metadata';
import { OrganizationFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-organization-form',
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
    OrganizationService,
    provideEntityCollectionService(OrganizationService),
    provideFormGroup(OrganizationFormGroup()),
    provideInputOptions(toFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationFormComponent extends FormComponent {}
