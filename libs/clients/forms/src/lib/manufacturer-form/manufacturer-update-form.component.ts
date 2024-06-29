import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ManufacturerMetadata } from '@webpackages/metadata';
import { UpdateManufacturerFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-manufacturer-update-form',
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
    ManufacturerService,
    provideEntityCollectionService(ManufacturerService),
    provideUpdateFormGroup(UpdateManufacturerFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(ManufacturerMetadata)),
  ],
})
export class ManufacturerUpdateFormComponent extends UpdateFormComponent {}
