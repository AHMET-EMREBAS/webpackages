import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { UserProfileMetadata } from '@webpackages/metadata';
import {
  UserProfileFormGroup,
  UpdateUserProfileFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-profile-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    UserProfileService,
    provideFormGroup(UserProfileFormGroup),
    provideInputOptions(toFormInputOptions(UserProfileMetadata)),
  ],
})
export class UserProfileFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-user-profile-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    UserProfileService,
    provideUpdateFormGroup(UpdateUserProfileFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserProfileMetadata)),
  ],
})
export class UserProfileUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
