import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserEmailMetadata } from '@webpackages/metadata';
import { UserEmailRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-email-raw-form',
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
    UserEmailService,
    provideEntityCollectionService(UserEmailService),
    provideRawFormGroup(UserEmailRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(UserEmailMetadata)),
  ],
})
export class UserEmailRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
