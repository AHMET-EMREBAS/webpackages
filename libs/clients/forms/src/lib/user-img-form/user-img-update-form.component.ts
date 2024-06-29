import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImgService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserImgMetadata } from '@webpackages/metadata';
import { UpdateUserImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-img-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    UserImgService,
    provideEntityCollectionService(UserImgService),
    provideUpdateFormGroup(UpdateUserImgFormGroup()),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserImgMetadata)),
  ],
})
export class UserImgUpdateFormComponent extends UpdateFormComponent {}
