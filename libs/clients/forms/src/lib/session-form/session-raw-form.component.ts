import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideRawFormGroup,
  provideRawInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { SessionMetadata } from '@webpackages/metadata';
import { SessionRawFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-session-raw-form',
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
    SessionService,
    provideEntityCollectionService(SessionService),
    provideRawFormGroup(SessionRawFormGroup()),
    provideRawInputOptions(toRawFormInputOptions(SessionMetadata)),
  ],
})
export class SessionRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
