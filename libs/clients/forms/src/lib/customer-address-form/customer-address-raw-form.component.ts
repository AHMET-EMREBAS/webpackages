import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerAddressMetadata } from '@webpackages/metadata';
import { CustomerAddressRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-address-raw-form',
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
    CustomerAddressService,
    provideEntityCollectionService(CustomerAddressService),
    provideRawFormGroup(CustomerAddressRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CustomerAddressMetadata)),
  ],
})
export class CustomerAddressRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
