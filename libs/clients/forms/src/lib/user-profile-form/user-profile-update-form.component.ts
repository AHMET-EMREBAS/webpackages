import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserProfileMetadata } from '@webpackages/metadata';
import { UserProfileUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-profile-update-form',
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
    UserProfileService,
    provideEntityCollectionService(UserProfileService),
    provideUpdateFormGroup(UserProfileUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserProfileMetadata)),
  ],
})
export class UserProfileUpdateFormComponent extends UpdateFormComponent {}
