import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { OrganizationMetadata } from '@webpackages/metadata';
import { OrganizationRawFormGroup } from '@webpackages/clients/form-groups';

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
    OrganizationService,
    provideEntityCollectionService(OrganizationService),
    provideUpdateFormGroup(OrganizationRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(OrganizationMetadata)),
  ],
})
export class OrganizationRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
