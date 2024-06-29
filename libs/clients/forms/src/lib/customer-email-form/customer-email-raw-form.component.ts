import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEmailService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerEmailMetadata } from '@webpackages/metadata';
import { CustomerEmailRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-email-raw-form',
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
    CustomerEmailService,
    provideEntityCollectionService(CustomerEmailService),
    provideRawFormGroup(CustomerEmailRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CustomerEmailMetadata)),
  ],
})
export class CustomerEmailRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
