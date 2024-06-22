import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StringFormat } from '@webpackages/types';
import { Observable, debounceTime, map } from 'rxjs';
import {
  InputErrorMessageHandler,
  InputErrorMessageHandlerToken,
  InputStatusIndicatorHandler,
  InputStatusIndicatorHandlerToken,
} from './input.provider';
import { InputOptions } from './input-options';

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
export class InputComponent implements InputOptions, OnInit {
  @Input() inputControl: FormControl;
  @Input() inputName: string;
  @Input() inputLabel: string;
  @Input() inputHint: string;
  @Input() inputMinLength: number;
  @Input() inputMaxLength: number;
  @Input() inputMin: number;
  @Input() inputMax: number;
  @Input() inputFormat: StringFormat;

  constructor(
    @Inject(InputErrorMessageHandlerToken)
    protected readonly errorMessage: InputErrorMessageHandler,
    @Inject(InputStatusIndicatorHandlerToken)
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

  // protected __statusIndicator() {
  //   return `(${this.inputControl.value?.length}/${this.inputMaxLength || '*'})`;
  // }
}
