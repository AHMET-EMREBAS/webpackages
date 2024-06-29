import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import { CustomerPhoneRawFormGroup } from '@webpackages/clients/form-groups';

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
    CustomerPhoneService,
    provideEntityCollectionService(CustomerPhoneService),
    provideUpdateFormGroup(CustomerPhoneRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(CustomerPhoneMetadata)),
  ],
})
export class CustomerPhoneRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
