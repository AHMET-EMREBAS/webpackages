import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserEmailMetadata } from '@webpackages/metadata';
import { UserEmailUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-email-update-form',
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
    UserEmailService,
    provideEntityCollectionService(UserEmailService),
    provideUpdateFormGroup(UserEmailUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserEmailMetadata)),
  ],
})
export class UserEmailUpdateFormComponent extends UpdateFormComponent {}
