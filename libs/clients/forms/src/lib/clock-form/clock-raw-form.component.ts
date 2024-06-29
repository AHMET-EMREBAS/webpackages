import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ClockMetadata } from '@webpackages/metadata';
import { ClockRawFormGroup } from '@webpackages/clients/form-groups';

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
    ClockService,
    provideEntityCollectionService(ClockService),
    provideUpdateFormGroup(ClockRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(ClockMetadata)),
  ],
})
export class ClockRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
