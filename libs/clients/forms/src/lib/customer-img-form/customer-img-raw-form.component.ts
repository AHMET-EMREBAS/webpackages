import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerImgMetadata } from '@webpackages/metadata';
import { CustomerImgRawFormGroup } from '@webpackages/clients/form-groups';

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
    CustomerImgService,
    provideEntityCollectionService(CustomerImgService),
    provideUpdateFormGroup(CustomerImgRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(CustomerImgMetadata)),
  ],
})
export class CustomerImgRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
