import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, debounceTime, map } from 'rxjs';
import {
  InputErrorMessageHandler,
  InputStatusIndicatorHandler,
  getInputStatusIndicatorHandlerToken,
  getInputErrorMessageHandlerToken,
} from './input.provider';
import { InputOptions } from './input-options';
import { InputType, StringFormat } from '@webpackages/types';

export const InputModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  MatInputModule,
  MatFormFieldModule,

  MatButtonModule,
  MatIconModule,
];
@Component({ template: '' })
export class InputComponent<T = unknown> implements InputOptions, OnInit {
  @Input() inputType: InputType;
  @Input() inputControl: FormControl;
  @Input() inputName: string;
  @Input() inputLabel: string;
  @Input() inputHint: string;
  @Input() inputMinLength: number;
  @Input() inputMaxLength: number;
  @Input() inputMin: number;
  @Input() inputMax: number;
  @Input() inputFormat: StringFormat;
  @Input() inputAutocomplete: HTMLInputElement['autocomplete'];

  constructor(
    @Inject(getInputErrorMessageHandlerToken())
    protected readonly errorMessage: InputErrorMessageHandler,
    @Inject(getInputStatusIndicatorHandlerToken())
    protected readonly statusIndicator: InputStatusIndicatorHandler
  ) {}

  /**
   * Descriptive error messages.
   */
  errorMessage$: Observable<string>;

  /**
   * Explain the current state of the input. Ex. 3/10  for 3 characters typed  by need 10
   */
  statusIndicator$: Observable<string>;

  /**
   * Try not to override
   */
  ngOnInit(): void {
    if (!this.inputControl) {
      if (isDevMode()) {
        console.warn(
          `inputControl is not provided which is required for the input components! We assume it is intentianal and create the instance`
        );
      }

      this.inputControl = new FormControl('');
    }

    this.errorMessage$ = this.inputControl.valueChanges.pipe(
      debounceTime(1000),
      map((e) => this.errorMessage(this.inputControl, this))
    );

    this.statusIndicator$ = this.inputControl.valueChanges.pipe(
      debounceTime(1000),
      map((e) => {
        return this.statusIndicator(this.inputControl, this);
      })
    );
  }
}
