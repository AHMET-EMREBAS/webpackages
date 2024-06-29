import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ProfileMetadata } from '@webpackages/metadata';
import { ProfileUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-profile-update-form',
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
    ProfileService,
    provideEntityCollectionService(ProfileService),
    provideUpdateFormGroup(ProfileUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileUpdateFormComponent extends UpdateFormComponent {}
