import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { AccessTokenMetadata } from '@webpackages/metadata';
import { UpdateAccessTokenFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-access-token-update-form',
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
    AccessTokenService,
    provideEntityCollectionService(AccessTokenService),
    provideUpdateFormGroup(UpdateAccessTokenFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AccessTokenMetadata)),
  ],
})
export class AccessTokenUpdateFormComponent extends UpdateFormComponent {}
