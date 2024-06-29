import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ProfileMetadata } from '@webpackages/metadata';
import { ProfileFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-profile-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    ProfileService,
    provideEntityCollectionService(ProfileService),
    provideFormGroup(ProfileFormGroup),
    provideInputOptions(toFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileFormComponent extends FormComponent {}
