import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProfileMetadata } from '@webpackages/metadata';
import { ProfileRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp--raw-form',
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
    provideUpdateFormGroup(ProfileRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(ProfileMetadata)),
  ],
})
export class ProfileRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
