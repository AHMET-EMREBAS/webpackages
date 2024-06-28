import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { StoreMetadata } from '@webpackages/metadata';
import { UpdateStoreFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-store-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
    (submittedEventSuccess)="handleFormSubmitSuccess($event)"
    (submittedEventError)="handleFormSubmitError($event)"
  ></wp-update-form>`,
  providers: [
    StoreService,
    provideEntityCollectionService(StoreService),
    provideUpdateFormGroup(UpdateStoreFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(StoreMetadata)),
  ],
})
export class StoreUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
