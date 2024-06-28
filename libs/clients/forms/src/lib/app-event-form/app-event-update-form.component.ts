import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { AppEventMetadata } from '@webpackages/metadata';
import { UpdateAppEventFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-app-event-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    AppEventService,
    provideEntityCollectionService(AppEventService),
    provideUpdateFormGroup(UpdateAppEventFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(AppEventMetadata)),
  ],
})
export class AppEventUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
