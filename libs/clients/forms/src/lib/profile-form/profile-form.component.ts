import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '@webpackages/clients/ngrx';
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
import { ProfileMetadata } from '@webpackages/metadata';
import {
  ProfileFormGroup,
  UpdateProfileFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-profile-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ProfileService,
    provideFormGroup(ProfileFormGroup),
    provideInputOptions(toFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-profile-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ProfileService,
    provideUpdateFormGroup(UpdateProfileFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}