import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { InboxMetadata } from '@webpackages/metadata';
import { InboxUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-inbox-update-form',
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
    InboxService,
    provideEntityCollectionService(InboxService),
    provideUpdateFormGroup(InboxUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(InboxMetadata)),
  ],
})
export class InboxUpdateFormComponent extends UpdateFormComponent {}
