import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceService } from '@webpackages/clients/ngrx';
import { UpdateFormComponent } from '@webpackages/material/form';
import { toUpdateFormInputOptions } from '@webpackages/types';
import { PriceMetadata } from '@webpackages/metadata';
import { UpdatePriceFormGroup } from '@webpackages/clients/form-groups';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wp-price-update-form',
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
  providers: [PriceService],
})
export class PriceUpdateFormComponent extends UpdateFormComponent {
  
  @Input() override onlyEmitEvent = true;
  override formGroup: FormGroup<any> = UpdatePriceFormGroup;

  constructor(service: PriceService, route: ActivatedRoute) {
    super(service, toUpdateFormInputOptions(PriceMetadata), 'Price', route);
  }
}
