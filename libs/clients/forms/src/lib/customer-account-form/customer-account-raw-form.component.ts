import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerAccountMetadata } from '@webpackages/metadata';
import { CustomerAccountRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-account-raw-form',
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
    CustomerAccountService,
    provideEntityCollectionService(CustomerAccountService),
    provideRawFormGroup(CustomerAccountRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CustomerAccountMetadata)),
  ],
})
export class CustomerAccountRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
