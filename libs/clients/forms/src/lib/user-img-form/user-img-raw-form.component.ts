import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImgService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { UserImgMetadata } from '@webpackages/metadata';
import { UserImgRawFormGroup } from '@webpackages/clients/form-groups';

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
    UserImgService,
    provideEntityCollectionService(UserImgService),
    provideUpdateFormGroup(UserImgRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(UserImgMetadata)),
  ],
})
export class UserImgRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
