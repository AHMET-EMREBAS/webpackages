import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserMetadata } from '@webpackages/metadata';
import { UserRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-raw-form',
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
    UserService,
    provideEntityCollectionService(UserService),
    provideRawFormGroup(UserRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(UserMetadata)),
  ],
})
export class UserRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
