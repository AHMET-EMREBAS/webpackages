import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SkuMetadata } from '@webpackages/metadata';
import { SkuRawFormGroup } from '@webpackages/clients/form-groups';

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
    SkuService,
    provideEntityCollectionService(SkuService),
    provideUpdateFormGroup(SkuRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(SkuMetadata)),
  ],
})
export class SkuRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
