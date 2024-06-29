import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SupplierMetadata } from '@webpackages/metadata';
import { SupplierRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-supplier-raw-form',
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
    SupplierService,
    provideEntityCollectionService(SupplierService),
    provideRawFormGroup(SupplierRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(SupplierMetadata)),
  ],
})
export class SupplierRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
