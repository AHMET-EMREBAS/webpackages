import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserAddressMetadata } from '@webpackages/metadata';
import { UserAddressRawFormGroup } from '@webpackages/clients/form-groups';

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
    UserAddressService,
    provideEntityCollectionService(UserAddressService),
    provideUpdateFormGroup(UserAddressRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
