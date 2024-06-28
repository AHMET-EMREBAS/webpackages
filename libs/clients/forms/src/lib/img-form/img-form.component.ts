import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { ImgMetadata } from '@webpackages/metadata';
import { ImgFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-img-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    ImgService,
    provideEntityCollectionService(ImgService),
    provideFormGroup(ImgFormGroup),
    provideInputOptions(toFormInputOptions(ImgMetadata)),
  ],
})
export class ImgFormComponent extends FormComponent {}
