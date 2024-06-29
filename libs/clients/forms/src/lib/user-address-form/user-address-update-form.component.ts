import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserAddressMetadata } from '@webpackages/metadata';
import { UserAddressUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-address-update-form',
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
    UserAddressService,
    provideEntityCollectionService(UserAddressService),
    provideUpdateFormGroup(UserAddressUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressUpdateFormComponent extends UpdateFormComponent {}
