import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerMetadata } from '@webpackages/metadata';
import { CustomerRawFormGroup } from '@webpackages/clients/form-groups';

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
    CustomerService,
    provideEntityCollectionService(CustomerService),
    provideUpdateFormGroup(CustomerRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(CustomerMetadata)),
  ],
})
export class CustomerRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
