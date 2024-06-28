import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { CartMetadata } from '@webpackages/metadata';
import { UpdateCartFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-cart-update-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submittedEvent)="handleFormSubmit($event)"
    [entityId]="entityId"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    CartService,
    provideEntityCollectionService(CartService),
    provideUpdateFormGroup(UpdateCartFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(CartMetadata)),
  ],
})
export class CartUpdateFormComponent extends UpdateFormComponent {
  @Input() override onlyEmitEvent = true;
}