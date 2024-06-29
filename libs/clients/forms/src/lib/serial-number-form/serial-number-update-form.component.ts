import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialNumberService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SerialNumberMetadata } from '@webpackages/metadata';
import { UpdateSerialNumberFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-serial-number-update-form',
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
    SerialNumberService,
    provideEntityCollectionService(SerialNumberService),
    provideUpdateFormGroup(UpdateSerialNumberFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SerialNumberMetadata)),
  ],
})
export class SerialNumberUpdateFormComponent extends UpdateFormComponent {}
