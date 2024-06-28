import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { FormComponent } from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { toFormInputOptions } from '@webpackages/types';
import { PriceLevelMetadata } from '@webpackages/metadata';
import { PriceLevelFormGroup } from '@webpackages/clients/form-groups';

@Component({
  selector: 'wp-price-level-form',
  standalone: true,
  imports: [CommonModule, FormComponent],
  template: `<wp-form
    (submittedEvent)="handleFormSubmit($event)"
    [onlyEmitEvent]="onlyEmitEvent"
    [submitButtonLabel]="submitButtonLabel"
  ></wp-form>`,
  providers: [
    PriceLevelService,
    provideEntityCollectionService(PriceLevelService),
    provideFormGroup(PriceLevelFormGroup),
    provideInputOptions(toFormInputOptions(PriceLevelMetadata)),
  ],
})
export class PriceLevelFormComponent extends FormComponent {}
