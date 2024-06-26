import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { EmailMetadata } from '@webpackages/metadata';
import { EmailUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-email-update-form',
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
    EmailService,
    provideEntityCollectionService(EmailService),
    provideUpdateFormGroup(EmailUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(EmailMetadata)),
  ],
})
export class EmailUpdateFormComponent extends UpdateFormComponent {}
