import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerProfileMetadata } from '@webpackages/metadata';
import { CustomerProfileRawFormGroup } from '@webpackages/clients/form-groups';

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
    CustomerProfileService,
    provideEntityCollectionService(CustomerProfileService),
    provideUpdateFormGroup(CustomerProfileRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(CustomerProfileMetadata)),
  ],
})
export class CustomerProfileRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
