import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '@webpackages/clients/ngrx';
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
import { EmailMetadata } from '@webpackages/metadata';
import {
  EmailFormGroup,
  UpdateEmailFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-email-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    EmailService,
    provideFormGroup(EmailFormGroup),
    provideInputOptions(toFormInputOptions(EmailMetadata)),
  ],
})
export class EmailFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-email-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    EmailService,
    provideUpdateFormGroup(UpdateEmailFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(EmailMetadata)),
  ],
})
export class EmailUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
