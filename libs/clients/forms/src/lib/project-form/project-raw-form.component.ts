import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { ProjectMetadata } from '@webpackages/metadata';
import { ProjectRawFormGroup } from '@webpackages/clients/form-groups';

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
    ProjectService,
    provideEntityCollectionService(ProjectService),
    provideUpdateFormGroup(ProjectRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(ProjectMetadata)),
  ],
})
export class ProjectRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
