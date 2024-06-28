import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { QuantityMetadata } from '@webpackages/metadata';
import { UpdateQuantityFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-quantity-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    QuantityService,
    provideEntityCollectionService(QuantityService),
    provideUpdateFormGroup(UpdateQuantityFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(QuantityMetadata)),
  ],
})
export class QuantityUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
