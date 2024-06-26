import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserPhoneMetadata } from '@webpackages/metadata';
import { UserPhoneUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-phone-update-form',
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
    UserPhoneService,
    provideEntityCollectionService(UserPhoneService),
    provideUpdateFormGroup(UserPhoneUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserPhoneMetadata)),
  ],
})
export class UserPhoneUpdateFormComponent extends UpdateFormComponent {}
