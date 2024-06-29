import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { PurchaseMetadata } from '@webpackages/metadata';
import { PurchaseRawFormGroup } from '@webpackages/clients/form-groups';

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
    PurchaseService,
    provideEntityCollectionService(PurchaseService),
    provideUpdateFormGroup(PurchaseRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(PurchaseMetadata)),
  ],
})
export class PurchaseRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
