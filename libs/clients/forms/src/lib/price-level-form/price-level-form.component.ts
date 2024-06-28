import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { FormComponent, UpdateFormComponent } from '@webpackages/material/form';
import {
  provideFormGroup,
  provideInputOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import {
  toFormInputOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { PriceLevelMetadata } from '@webpackages/metadata';
import {
  PriceLevelFormGroup,
  UpdatePriceLevelFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-level-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PriceLevelService,
    provideFormGroup(PriceLevelFormGroup),
    provideInputOptions(toFormInputOptions(PriceLevelMetadata)),
  ],
})
export class PriceLevelFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-price-level-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    PriceLevelService,
    provideUpdateFormGroup(UpdatePriceLevelFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(PriceLevelMetadata)),
  ],
})
export class PriceLevelUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.formSubmitEvent.emit(event);
  }
}
