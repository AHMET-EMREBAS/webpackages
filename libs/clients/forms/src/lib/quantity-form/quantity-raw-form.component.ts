import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { QuantityMetadata } from '@webpackages/metadata';
import { QuantityRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-quantity-raw-form',
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
    QuantityService,
    provideEntityCollectionService(QuantityService),
    provideRawFormGroup(QuantityRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(QuantityMetadata)),
  ],
})
export class QuantityRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
