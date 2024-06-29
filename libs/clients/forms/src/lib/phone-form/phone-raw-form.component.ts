import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { PhoneMetadata } from '@webpackages/metadata';
import { PhoneRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-phone-raw-form',
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
    PhoneService,
    provideEntityCollectionService(PhoneService),
    provideRawFormGroup(PhoneRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(PhoneMetadata)),
  ],
})
export class PhoneRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
