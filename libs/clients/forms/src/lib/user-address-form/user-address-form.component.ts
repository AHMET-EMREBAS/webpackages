import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { UserAddressMetadata } from '@webpackages/metadata';
import { UserAddressFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-user-address-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    UserAddressService,
    provideEntityCollectionService(UserAddressService),
    provideFormGroup(UserAddressFormGroup),
    provideInputOptions(toFormInputOptions(UserAddressMetadata)),
  ],
})
export class UserAddressFormComponent extends FormComponent {}
