/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LocalStoreController,
  getFormGroupToken,
  getInputOptionsToken,
  getResourceNameToken,
} from '@webpackages/material/core';
import { Observable, Subscription, debounceTime, map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { setFormGroupErrors } from '../form';

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
  SelectComponent,
} from '@webpackages/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'wp-raw-form',
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
    SelectComponent,

    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  template: `
    <form class="w-full flex flex-row flex-wrap gap-4">
      @for(option of inputOptions; track option){

      <!-- Text Input -->
      @if(option.inputType ==='text' ){
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
      @else if(option.inputType ==='textarea' ){
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
      @else if(option.inputType ==='number' || option.type ==='number'){
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
      @else if(option.inputType ==='date' || option.type ==='date'){
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
      @else if(option.inputType ==='search' ){

      <wp-search
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [resourceName]="option.resourceName"
        [resourceLabelProperty]="option.resourceLabelProperty"
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
        [resourceName]="option.resourceName"
        [resourceLabelProperty]="option.resourceLabelProperty"
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

      <!-- Select -->
      @else if(option.inputType ==='select'){
      <wp-select
        [inputName]="option.name"
        [inputControl]="control(option.name)"
        [inputLabel]="option.label"
        [inputRequired]="option.required"
        [enumOptions]="option.enum || []"
        [class]="option.class"
        [tabindex]="option.tabIndex"
        [inputMultiple]="option.multiple"
      ></wp-select>
      }

      <!-- Checkbox -->
      @else if(option.inputType ==='checkbox' || option.type ==='boolean'){
      <mat-checkbox
        [name]="option.name"
        [formControl]="control(option.name)"
        [tabindex]="option.tabIndex"
        [class]="option.class + ' mr-16'"
      >
        {{ option.label }}
      </mat-checkbox>
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
          (click)="handleFormSubmit()"
          [disabled]="formGroup.invalid"
        >
          {{ submitButtonLabel }}
        </button>
        <button class="w-full" mat-raised-button (click)="reset()">
          Reset
        </button>
      </div>
    </form>
  `,

  styles: ` 
  @media screen and (max-width:600px){ 

    form > * { 
      width:100% !important; 
    }
    
  }
`,
})
export class RawFormComponent<T = any> implements OnInit, OnDestroy {
  isFormSubmitted = false;
  formGroup = inject(getFormGroupToken(), { optional: true });
  formStore: LocalStoreController<any>;
  valueChange: Observable<T>;
  valueChangeSub: Subscription;
  /**
   * Localstore name to store the form data
   */
  @Input() formStoreName: string;

  /**
   * Only emit the form value NOT make a http request
   */
  @Input() onlyEmitEvent: boolean;

  @Input() submitButtonLabel = 'Submit';

  @Output() submittedEvent = new EventEmitter<any>();

  @Output() submittedEventSuccess = new EventEmitter<any>();
  @Output() submittedEventError = new EventEmitter<any>();

  readonly inputOptions = inject(getInputOptionsToken());
  readonly resourceName = inject(getResourceNameToken());

  ngOnInit(): void {
    const localStoreName = this.resourceName || this.formStoreName;
    if (localStoreName) {
      this.formStore = new LocalStoreController(localStoreName);
      const defaultValue = this.formStore?.get();
      if (defaultValue) {
        for (const [key, value] of Object.entries(defaultValue)) {
          this.formGroup.get(key).setValue(value);
        }
      }
    }

    this.valueChange = this.formGroup.valueChanges.pipe(
      debounceTime(600),
      map((data) => {
        this.formStore?.set(data);
        return data;
      })
    );

    this.valueChangeSub = this.valueChange.subscribe();
  }

  ngOnDestroy(): void {
    this.valueChangeSub.unsubscribe();
  }

  async handleFormSubmit(event?: any) {
    this.submittedEvent.emit(event || this.formGroup.value);
  }

  handleFormSubmitSuccess(event: any) {
    this.submittedEventSuccess.emit(event);
  }

  handleFormSubmitError(event: any) {
    this.submittedEventError.emit(event);
  }

  setFormValue(formValue: any) {
    const entries = Object.entries(formValue);
    for (const [key, value] of entries) {
      this.formGroup.get(key)?.setValue(value);
    }
  }

  setErrors(errors: any) {
    setFormGroupErrors(this.formGroup, errors);
  }

  control(name: string) {
    if (this.formGroup) {
      return this.formGroup.get(name) as FormControl;
    }
    throw new Error(`Form group is not provided!`);
  }

  reset() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
    const controls = this.formGroup.controls;

    for (const [, value] of Object.entries(controls)) {
      value.markAsUntouched();
      value.reset();
      value.setValue(null);
      value.setErrors(null);
    }
  }
}
