import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SessionMetadata } from '@webpackages/metadata';
import { UpdateSessionFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-session-update-form',
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
    SessionService,
    provideEntityCollectionService(SessionService),
    provideUpdateFormGroup(UpdateSessionFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SessionMetadata)),
  ],
})
export class SessionUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
