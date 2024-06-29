import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { MessageMetadata } from '@webpackages/metadata';
import { MessageRawFormGroup } from '@webpackages/clients/form-groups';

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
    MessageService,
    provideEntityCollectionService(MessageService),
    provideUpdateFormGroup(MessageRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(MessageMetadata)),
  ],
})
export class MessageRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
