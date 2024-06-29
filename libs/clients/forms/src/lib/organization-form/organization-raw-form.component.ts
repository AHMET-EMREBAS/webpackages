import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { OrganizationMetadata } from '@webpackages/metadata';
import { OrganizationRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-organization-raw-form',
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
    OrganizationService,
    provideEntityCollectionService(OrganizationService),
    provideRawFormGroup(OrganizationRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
