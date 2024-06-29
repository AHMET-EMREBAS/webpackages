import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerAccountMetadata } from '@webpackages/metadata';
import { CustomerAccountRawFormGroup } from '@webpackages/clients/form-groups';

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
    CustomerAccountService,
    provideEntityCollectionService(CustomerAccountService),
    provideUpdateFormGroup(CustomerAccountRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(CustomerAccountMetadata)),
  ],
})
export class CustomerAccountRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
