/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, OnInit, inject } from '@angular/core';
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
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { isNotUndefined } from '@webpackages/utils';
import { PropertyOptions } from '@webpackages/types';

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
export class FormComponent<T = any> implements OnInit {
  submitted = false;
  formGroup = inject(getFormGroupToken());
  entityId: number;

  constructor(
    @Inject(getEntityCollectionServiceToken())
    protected readonly service: EntityCollectionService<T>,
    @Inject(getInputOptionsToken())
    public readonly inputOptions: PropertyOptions[],
    private readonly route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (isNotUndefined(id)) {
      this.entityId = parseInt(id);

      const foundItem = await firstValueFrom(
        this.service.getByKey(this.entityId)
      );

      console.log(foundItem, '<< Found Item');

      for (const [key, value] of Object.entries(foundItem)) {
        const c = this.formGroup.get(key);
        if (c) {
          c.setValue(value);
        }
      }
    }
  }

  async saveItem() {
    try {
      if (this.entityId) {
        await firstValueFrom(
          this.service.update(
            { ...this.formGroup.value, id: this.entityId },
            { isOptimistic: false }
          )
        );
      } else {
        await firstValueFrom(
          this.service?.add(
            { ...this.formGroup.value },
            {
              isOptimistic: false,
            }
          )
        );
      }
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
