import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxService } from '@webpackages/clients/ngrx';
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
import { InboxMetadata } from '@webpackages/metadata';
import {
  InboxFormGroup,
  UpdateInboxFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-inbox-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    InboxService,
    provideFormGroup(InboxFormGroup),
    provideInputOptions(toFormInputOptions(InboxMetadata)),
  ],
})
export class InboxFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-inbox-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    InboxService,
    provideUpdateFormGroup(UpdateInboxFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(InboxMetadata)),
  ],
})
export class InboxUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
