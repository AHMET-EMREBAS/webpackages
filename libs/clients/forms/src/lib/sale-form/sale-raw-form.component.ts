import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SaleMetadata } from '@webpackages/metadata';
import { SaleRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sale-raw-form',
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
    SaleService,
    provideEntityCollectionService(SaleService),
    provideRawFormGroup(SaleRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(SaleMetadata)),
  ],
})
export class SaleRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
