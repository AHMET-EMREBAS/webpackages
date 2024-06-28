import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { AddressMetadata } from '@webpackages/metadata';
import { AddressFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-address-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-form>`,
  providers: [
    AddressService,
    provideEntityCollectionService(AddressService),
    provideFormGroup(AddressFormGroup),
    provideInputOptions(toFormInputOptions(AddressMetadata)),
  ],
})
export class AddressFormComponent extends FormComponent {}
