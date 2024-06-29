import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ManufacturerMetadata } from '@webpackages/metadata';
import { ManufacturerRawFormGroup } from '@webpackages/clients/form-groups';

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
    ManufacturerService,
    provideEntityCollectionService(ManufacturerService),
    provideUpdateFormGroup(ManufacturerRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(ManufacturerMetadata)),
  ],
})
export class ManufacturerRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
