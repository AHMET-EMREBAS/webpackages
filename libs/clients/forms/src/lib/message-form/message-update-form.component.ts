import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { MessageMetadata } from '@webpackages/metadata';
import { UpdateMessageFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-message-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    MessageService,
    provideEntityCollectionService(MessageService),
    provideUpdateFormGroup(UpdateMessageFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(MessageMetadata)),
  ],
})
export class MessageUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
