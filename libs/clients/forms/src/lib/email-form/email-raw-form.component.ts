import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { EmailMetadata } from '@webpackages/metadata';
import { EmailRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-email-raw-form',
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
    EmailService,
    provideEntityCollectionService(EmailService),
    provideRawFormGroup(EmailRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(EmailMetadata)),
  ],
})
export class EmailRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
