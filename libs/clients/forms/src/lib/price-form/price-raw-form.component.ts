import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { PriceMetadata } from '@webpackages/metadata';
import { PriceRawFormGroup } from '@webpackages/clients/form-groups';

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
    PriceService,
    provideEntityCollectionService(PriceService),
    provideUpdateFormGroup(PriceRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(PriceMetadata)),
  ],
})
export class PriceRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
