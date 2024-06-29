import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserAddressMetadata } from '@webpackages/metadata';
import { UserAddressRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-address-raw-form',
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
    UserAddressService,
    provideEntityCollectionService(UserAddressService),
    provideRawFormGroup(UserAddressRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
