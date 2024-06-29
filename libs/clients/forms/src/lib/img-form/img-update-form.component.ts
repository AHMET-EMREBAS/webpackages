import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { ImgMetadata } from '@webpackages/metadata';
import { ImgUpdateFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-img-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `
    <wp-update-form
      (submittedEvent)="handleFormSubmit($event)"
      [entityId]="entityId"
      [onlyEmitEvent]="onlyEmitEvent"
      [submitButtonLabel]="submitButtonLabel"
      (submittedEventSuccess)="handleFormSubmitSuccess($event)"
      (submittedEventError)="handleFormSubmitError($event)"
      [formStoreName]="formStoreName"
    ></wp-update-form>
  `,
  providers: [
    ImgService,
    provideEntityCollectionService(ImgService),
    provideUpdateFormGroup(ImgUpdateFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(ImgMetadata)),
  ],
})
export class ImgUpdateFormComponent extends UpdateFormComponent {}
