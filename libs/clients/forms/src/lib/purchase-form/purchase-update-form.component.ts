import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PurchaseMetadata } from '@webpackages/metadata';
import { UpdatePurchaseFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-purchase-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PurchaseService,
    provideEntityCollectionService(PurchaseService),
    provideUpdateFormGroup(UpdatePurchaseFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PurchaseMetadata)),
  ],
})
export class PurchaseUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}