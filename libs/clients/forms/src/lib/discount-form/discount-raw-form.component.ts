import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { DiscountMetadata } from '@webpackages/metadata';
import { DiscountRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-discount-raw-form',
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
    DiscountService,
    provideEntityCollectionService(DiscountService),
    provideRawFormGroup(DiscountRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(DiscountMetadata)),
  ],
})
export class DiscountRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
