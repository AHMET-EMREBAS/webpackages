import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImgService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserImgMetadata } from '@webpackages/metadata';
import { UserImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-img-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-form>`,
  providers: [
    UserImgService,
    provideEntityCollectionService(UserImgService),
    provideFormGroup(UserImgFormGroup),
    provideInputOptions(toFormInputOptions(UserImgMetadata)),
  ],
})
export class UserImgFormComponent extends FormComponent {}
