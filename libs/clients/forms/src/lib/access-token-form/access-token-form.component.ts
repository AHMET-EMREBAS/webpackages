import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenService } from '@webpackages/clients/ngrx';
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
import { AccessTokenMetadata } from '@webpackages/metadata';
import {
  AccessTokenFormGroup,
  UpdateAccessTokenFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-access-token-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    AccessTokenService,
    provideFormGroup(AccessTokenFormGroup),
    provideInputOptions(toFormInputOptions(AccessTokenMetadata)),
  ],
})
export class AccessTokenFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-access-token-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    AccessTokenService,
    provideUpdateFormGroup(UpdateAccessTokenFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AccessTokenMetadata)),
  ],
})
export class AccessTokenUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
