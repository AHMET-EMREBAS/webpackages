import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerImgMetadata } from '@webpackages/metadata';
import { CustomerImgRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-customer-img-raw-form',
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
    CustomerImgService,
    provideEntityCollectionService(CustomerImgService),
    provideRawFormGroup(CustomerImgRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
