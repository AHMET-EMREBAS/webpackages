import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { SessionMetadata } from '@webpackages/metadata';
import {
  SessionFormGroup,
  UpdateSessionFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-session-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SessionService,
    provideFormGroup(SessionFormGroup),
    provideInputOptions(toFormInputOptions(SessionMetadata)),
  ],
})
export class SessionFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-session-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SessionService,
    provideUpdateFormGroup(UpdateSessionFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SessionMetadata)),
  ],
})
export class SessionUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
