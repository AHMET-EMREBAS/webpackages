import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PhoneMetadata } from '@webpackages/metadata';
import { UpdatePhoneFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-phone-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PhoneService,
    provideEntityCollectionService(PhoneService),
    provideUpdateFormGroup(UpdatePhoneFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PhoneMetadata)),
  ],
})
export class PhoneUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
