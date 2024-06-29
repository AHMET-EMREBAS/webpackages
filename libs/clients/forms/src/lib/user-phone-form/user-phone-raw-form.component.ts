import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserPhoneMetadata } from '@webpackages/metadata';
import { UserPhoneRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-phone-raw-form',
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
    UserPhoneService,
    provideEntityCollectionService(UserPhoneService),
    provideRawFormGroup(UserPhoneRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(UserPhoneMetadata)),
  ],
})
export class UserPhoneRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
