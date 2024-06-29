import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { DepartmentMetadata } from '@webpackages/metadata';
import { DepartmentRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-department-raw-form',
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
    DepartmentService,
    provideEntityCollectionService(DepartmentService),
    provideRawFormGroup(DepartmentRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(DepartmentMetadata)),
  ],
})
export class DepartmentRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
