import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuDetailService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SkuDetailMetadata } from '@webpackages/metadata';
import { SkuDetailRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-detail-raw-form',
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
    SkuDetailService,
    provideEntityCollectionService(SkuDetailService),
    provideRawFormGroup(SkuDetailRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(SkuDetailMetadata)),
  ],
})
export class SkuDetailRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
