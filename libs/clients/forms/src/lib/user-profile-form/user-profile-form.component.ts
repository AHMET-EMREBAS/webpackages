import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserProfileMetadata } from '@webpackages/metadata';
import { UserProfileFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-profile-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    UserProfileService,
    provideEntityCollectionService(UserProfileService),
    provideFormGroup(UserProfileFormGroup),
    provideInputOptions(toFormInputOptions(UserProfileMetadata)),
  ],
})
export class UserProfileFormComponent extends FormComponent {}
