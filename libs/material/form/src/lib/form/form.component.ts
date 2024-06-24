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

import { EntityCollectionService } from '@ngrx/data';
import { catchError, of } from 'rxjs';
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
        [class]="option.class"
      ></wp-input-text>
      }

      <!-- Textarea -->
      @else if(option.inputType ==='textarea'){
      <wp-input-textarea
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputMaxLength]="option.maxLength"
        [inputRequired]="option.required"
        [class]="option.class"
      ></wp-input-textarea>
      }

      <!-- Number -->
      @else if(option.inputType ==='number'){
      <wp-input-number
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
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
      ></wp-input-date>
      }

      <!-- Search  -->
      @else if(option.inputType ==='search'){

      <wp-search
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [class]="option.class"
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
      ></wp-autocomplete-many>
      }

      <!-- Checkbox -->
      @else if(option.inputType ==='checkbox'){
      <mat-checkbox
        [name]="option.name"
        [formControl]="control(option.name)"
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
        class="w-full"
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

  saveItem() {
    this.service?.add(this.formGroup?.value, { isOptimistic: false }).pipe(
      catchError((error) => {
        console.log('ERror : ', error);
        return of(null);
      })
    );
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
