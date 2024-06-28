import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { UserMetadata } from '@webpackages/metadata';
import { UpdateUserFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-update-form>`,
  providers: [
    UserService,
    provideEntityCollectionService(UserService),
    provideUpdateFormGroup(UpdateUserFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(UserMetadata)),
  ],
})
export class UserUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
