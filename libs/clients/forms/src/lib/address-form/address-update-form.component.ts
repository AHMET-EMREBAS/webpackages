import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { AddressMetadata } from '@webpackages/metadata';
import { UpdateAddressFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-address-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
    [formStoreName]="formStoreName"
  ></wp-update-form>`,
  providers: [
    AddressService,
    provideEntityCollectionService(AddressService),
    provideUpdateFormGroup(UpdateAddressFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AddressMetadata)),
  ],
})
export class AddressUpdateFormComponent extends UpdateFormComponent {}
