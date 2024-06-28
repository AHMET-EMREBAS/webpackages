import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PriceMetadata } from '@webpackages/metadata';
import { UpdatePriceFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PriceService,
    provideEntityCollectionService(PriceService),
    provideUpdateFormGroup(UpdatePriceFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PriceMetadata)),
  ],
})
export class PriceUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
