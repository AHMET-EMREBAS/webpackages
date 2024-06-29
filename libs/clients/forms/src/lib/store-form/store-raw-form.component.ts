import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { StoreMetadata } from '@webpackages/metadata';
import { StoreRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-store-raw-form',
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
    StoreService,
    provideEntityCollectionService(StoreService),
    provideRawFormGroup(StoreRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(StoreMetadata)),
  ],
})
export class StoreRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
