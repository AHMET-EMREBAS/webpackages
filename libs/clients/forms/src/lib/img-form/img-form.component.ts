import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgService } from '@webpackages/clients/ngrx';
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
import { ImgMetadata } from '@webpackages/metadata';
import {
  ImgFormGroup,
  UpdateImgFormGroup,
} from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-img-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ImgService,
    provideFormGroup(ImgFormGroup),
    provideInputOptions(toFormInputOptions(ImgMetadata)),
  ],
})
export class ImgFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}

@Component({
  selector: 'wp-img-form',
  standalone: true,
  imports: [CommonModule, UpdateFormComponent],
  template: `<wp-update-form
    (submitEvent)="submitForm($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-update-form>`,
  providers: [
    ImgService,
    provideUpdateFormGroup(UpdateImgFormGroup),
    provideUpdateInputOptions(toUpdateFormInputOptions(ImgMetadata)),
  ],
})
export class ImgUpdateFormComponent extends FormComponent {
  override async submitForm(event?: any) {
    this.submitEvent.emit(event);
  }
}
