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

import {
  DataServiceError,
  EntityCollectionService,
  MergeStrategy,
} from '@ngrx/data';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import {
  InputOption,
  getEntityCollectionServiceToken,
  getFormGroupToken,
  getInputOptionsToken,
} from '@webpackages/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'wp-form',
  standalone: true,
  imports: [
    CommonModule,
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
  template: `
    <form class="w-full flex flex-row flex-wrap gap-4">
      @for(option of inputOptions; track option){

      <!-- Text Input -->
      @if(option.inputType ==='text'){
      <wp-input-text
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [inputMinLength]="option.minLength"
        [inputMaxLength]="option.maxLength"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-input-text>
      }

      <!-- Textarea -->
      @else if(option.inputType ==='textarea'){
      <wp-input-textarea
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [inputMinLength]="option.minLength"
        [inputMaxLength]="option.maxLength"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-input-textarea>
      }

      <!-- Number -->
      @else if(option.inputType ==='number'){
      <wp-input-number
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [inputMin]="option.minimum"
        [inputMax]="option.maximum"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-input-number>
      }

      <!-- Date -->
      @else if(option.inputType ==='date'){
      <wp-input-date
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-input-date>
      }

      <!-- Search  -->
      @else if(option.inputType ==='search'){

      <wp-search
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [pluralResourceName]="option.resourceName"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-search>

      }

      <!-- Search Many -->
      @else if(option.inputType ==='search-many'){

      <wp-search-many
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [pluralResourceName]="option.resourceName"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-search-many>

      }

      <!-- Autocomplete -->
      @else if(option.inputType ==='autocomplete'){
      <wp-autocomplete
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [autocompleteOptions]="option.autocompleteOptions || []"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-autocomplete>
      }

      <!-- Autocomplete Many -->
      @else if(option.inputType ==='autocomplete-many'){
      <wp-autocomplete-many
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [autocompleteOptions]="option.autocompleteOptions || []"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-autocomplete-many>
      }

      <!-- Checkbox -->
      @else if(option.inputType ==='checkbox'){
      <mat-checkbox
        [name]="option.name"
        [formControl]="control(option.name)"
        [tabindex]="option.tabIndex"
      ></mat-checkbox>
      }

      <!-- Text -->
      @else{
      <wp-input-text
        [inputName]="option.name"
        [inputLabel]="option.label"
        [inputControl]="control(option.name)"
        [inputRequired]="option.required"
        [inputMinLength]="option.minLength"
        [inputMaxLength]="option.maxLength"
        [class]="option.class"
        [tabindex]="option.tabIndex"
      ></wp-input-text>
      }

      <!-- End -->
      }
      <div class="w-full flex flex-row gap-4 order-last">
        <button
          class="w-full"
          mat-raised-button
          color="primary"
          (click)="saveItem()"
        >
          Save
        </button>
        <button class="w-full" mat-raised-button (click)="reset()">
          Reset
        </button>
      </div>
    </form>

    {{ formGroup.get('name').errors | json }}
  `,
  styles: ``,
})
export class FormComponent<T = any> {
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
    } catch (err) {
      const rawErrors = (err as DataServiceError).error.error.errors;

      for (const rawError of rawErrors) {
        const errors = Object.values(rawError);
        for (const e of errors) {
          const control = this.formGroup.get((e as any)?.property);

          control.setErrors((e as any)?.constraints);
        }
        // const [key, error] = Object.entries(e) as any;
        // console.log(key, error);

        // const control = this.formGroup.get(key);

        // if (!control) {
        //   console.log(key, '<<<<<');
        // }
        // control.setErrors((error as any).constraints);
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
