import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenService } from '@webpackages/clients/ngrx';
import { RawFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toRawFormInputOptions } from '@webpackages/types';
import { AccessTokenMetadata } from '@webpackages/metadata';
import { AccessTokenRawFormGroup } from '@webpackages/clients/form-groups';

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
    AccessTokenService,
    provideEntityCollectionService(AccessTokenService),
    provideUpdateFormGroup(AccessTokenRawFormGroup()),
    provideUpdateInputOptions(toRawFormInputOptions(AccessTokenMetadata)),
  ],
})
export class AccessTokenRawFormComponent extends RawFormComponent {
  @ViewChild('rawFormRef') rawFormRef: RawFormComponent;
}
