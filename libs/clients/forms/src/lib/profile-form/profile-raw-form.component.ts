import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProfileMetadata } from '@webpackages/metadata';
import { ProfileRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-profile-raw-form',
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
    ProfileService,
    provideEntityCollectionService(ProfileService),
    provideRawFormGroup(ProfileRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
