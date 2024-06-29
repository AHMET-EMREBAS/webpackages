import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { AddressMetadata } from '@webpackages/metadata';
import { AddressRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-address-raw-form',
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
    AddressService,
    provideEntityCollectionService(AddressService),
    provideRawFormGroup(AddressRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(AddressMetadata)),
  ],
})
export class AddressRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
