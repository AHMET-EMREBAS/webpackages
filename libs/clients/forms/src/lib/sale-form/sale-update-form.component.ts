import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { SaleMetadata } from '@webpackages/metadata';
import { UpdateSaleFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sale-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SaleService,
    provideEntityCollectionService(SaleService),
    provideUpdateFormGroup(UpdateSaleFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SaleMetadata)),
  ],
})
export class SaleUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}
