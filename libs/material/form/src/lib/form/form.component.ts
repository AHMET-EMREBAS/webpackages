/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  InputTextComponent,
  InputNumberComponent,
  InputDateComponent,
  AutocompleteComponent,
  SearchComponent,
  SearchManyComponent,
  InputTextareaComponent,
  AutocompleteManyComponent,
} from '@webpackages/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataServiceError, EntityCollectionService } from '@ngrx/data';
import { firstValueFrom } from 'rxjs';
import {
  InputOption,
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'wp-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputNumberComponent,
    InputDateComponent,
    InputTextareaComponent,
    AutocompleteComponent,
    AutocompleteManyComponent,
    SearchComponent,
    SearchManyComponent,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './form.component.html',
})
export class FormComponent<T = any> {
  submitted = false;
  formGroup = inject(getFormGroupToken());

  constructor(
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<T>,
    @Inject(getInputOptionsToken())
    public readonly inputOptions: InputOption[]
  ) {}

  async saveItem() {
    try {
      await firstValueFrom(
        this.service?.add(this.formGroup?.value, {
          isOptimistic: false,
        })
      );
      this.submitted = true;
    } catch (err) {
      const rawErrors = (err as DataServiceError).error.error.errors;
      for (const rawError of rawErrors) {
        const errors = Object.values(rawError);
        for (const e of errors) {
          const control = this.control((e as any)?.property);
          control.setErrors((e as any)?.constraints);
        }
      }
    }
  }

  control(name: string) {
    if (this.formGroup) {
      return this.formGroup.get(name) as FormControl;
    }
    throw new Error(`Form group is not provided!`);
  }

  reset() {
    this.formGroup.reset({}, { emitEvent: false });
    this.formGroup.markAsUntouched();
  }
}
