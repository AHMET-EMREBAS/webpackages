import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerialNumberService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SerialNumberMetadata } from '@webpackages/metadata';
import { SerialNumberRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-serial-number-raw-form',
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
    SerialNumberService,
    provideEntityCollectionService(SerialNumberService),
    provideRawFormGroup(SerialNumberRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(SerialNumberMetadata)),
  ],
})
export class SerialNumberRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
