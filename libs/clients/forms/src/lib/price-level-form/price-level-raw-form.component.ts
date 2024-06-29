import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { PriceLevelMetadata } from '@webpackages/metadata';
import { PriceLevelRawFormGroup } from '@webpackages/clients/form-groups';

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
    PriceLevelService,
    provideEntityCollectionService(PriceLevelService),
    provideUpdateFormGroup(PriceLevelRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(PriceLevelMetadata)),
  ],
})
export class PriceLevelRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
