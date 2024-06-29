import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserProfileMetadata } from '@webpackages/metadata';
import { UserProfileRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-profile-raw-form',
  standalone: true,
  imports: [CommonModule, RawFormComponent],
  template: `
    <wp-raw-form
      #rawFormRef
      (submittedEvent)="handleFormSubmit($event)"
      [submitButtonLabel]="submitButtonLabel"
      [formStoreName]="formStoreName"
    ></wp-raw-form>
  `,
  providers: [
    UserProfileService,
    provideEntityCollectionService(UserProfileService),
    provideRawFormGroup(UserProfileRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(UserProfileMetadata)),
  ],
})
export class UserProfileRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
