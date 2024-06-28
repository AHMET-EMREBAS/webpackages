import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuService } from '@webpackages/clients/ngrx';
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
import { SkuMetadata } from '@webpackages/metadata';
import {
  SkuFormGroup,
  UpdateSkuFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-sku-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    SkuService,
    provideFormGroup(SkuFormGroup),
    provideInputOptions(toFormInputOptions(SkuMetadata)),
  ],
})
export class SkuFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}

@Component({
  selector: 'wp-sku-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    SkuService,
    provideUpdateFormGroup(UpdateSkuFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(SkuMetadata)),
  ],
})
export class SkuUpdateFormComponent extends FormComponent {
  override async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event);
  }
}
