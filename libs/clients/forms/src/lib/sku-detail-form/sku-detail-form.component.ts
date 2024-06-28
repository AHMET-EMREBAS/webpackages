import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuDetailService } from '@webpackages/clients/ngrx';
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
import { SkuDetailMetadata } from '@webpackages/metadata';
import {
  SkuDetailFormGroup,
  UpdateSkuDetailFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-detail-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SkuDetailService,
    provideFormGroup(SkuDetailFormGroup),
    provideInputOptions(toFormInputOptions(SkuDetailMetadata)),
  ],
})
export class SkuDetailFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-sku-detail-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SkuDetailService,
    provideUpdateFormGroup(UpdateSkuDetailFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SkuDetailMetadata)),
  ],
})
export class SkuDetailUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
