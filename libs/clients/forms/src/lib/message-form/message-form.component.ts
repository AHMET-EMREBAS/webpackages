import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@webpackages/clients/ngrx';
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
import { MessageMetadata } from '@webpackages/metadata';
import {
  MessageFormGroup,
  UpdateMessageFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-message-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    MessageService,
    provideFormGroup(MessageFormGroup),
    provideInputOptions(toFormInputOptions(MessageMetadata)),
  ],
})
export class MessageFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}

@Component({
  selector: 'wp-message-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    MessageService,
    provideUpdateFormGroup(UpdateMessageFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(MessageMetadata)),
  ],
})
export class MessageUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submitted.emit(event);
  }
}
