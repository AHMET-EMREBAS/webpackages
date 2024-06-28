import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessTokenService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { AccessTokenMetadata } from '@webpackages/metadata';
import { AccessTokenFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-access-token-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    AccessTokenService,
    provideEntityCollectionService(AccessTokenService),
    provideFormGroup(AccessTokenFormGroup),
    provideInputOptions(toFormInputOptions(AccessTokenMetadata)),
  ],
})
export class AccessTokenFormComponent extends FormComponent {}
