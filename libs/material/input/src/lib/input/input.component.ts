import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  isDevMode,
} from '@angular/core';
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
  getInputDebounceTimeToken,
} from './input.provider';
import { InputOptions } from './input-options';
import { InputType, StringFormat } from '@webpackages/types';

export const FormModules = [CommonModule, FormsModule, ReactiveFormsModule];
export const InputModules = [
  CommonModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  ...FormModules,
];
@Component({ template: '' })
export class InputComponent<T = unknown>
  implements InputOptions, OnInit, AfterViewInit
{
  @Input() inputType: InputType;
  @Input() inputRequired: boolean | undefined = false;
  @Input() inputControl: FormControl;
  @Input() inputName = 'unkown';
  @Input() inputLabel = 'unkown';
  @Input() inputHint: string | undefined = '';
  @Input() inputMinLength: number | undefined = 0;
  @Input() inputMaxLength: number | undefined = 1000;
  @Input() inputMin: number | undefined = Number.MIN_SAFE_INTEGER;
  @Input() inputMax: number | undefined = Number.MAX_SAFE_INTEGER;
  @Input() inputFormat: StringFormat = 'long';
  @Input() inputAutocomplete: HTMLInputElement['autocomplete'] = 'off';
  @Input() inputEnums: string[] = [];
  @Input() inputMultiple: boolean | undefined = false;

  constructor(
    @Inject(getInputErrorMessageHandlerToken())
    protected readonly errorMessageHandler: InputErrorMessageHandler,
    @Inject(getInputStatusIndicatorHandlerToken())
    protected readonly statusIndicatorHandler: InputStatusIndicatorHandler,
    @Inject(getInputDebounceTimeToken())
    protected readonly inputDebounceTime: number
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
      debounceTime(this.inputDebounceTime),
      map((e) => this.errorMessageHandler(this.inputControl, this))
    );

    this.statusIndicator$ = this.inputControl.valueChanges.pipe(
      debounceTime(this.inputDebounceTime),
      map((e) => {
        return this.statusIndicatorHandler(this.inputControl, this);
      })
    );
  }

  ngAfterViewInit(): void {
    if (isDevMode()) {
      this.inputControl.valueChanges.subscribe((value) => {
        console.log(
          `${this.inputName || 'inputName is not provided'} : `,
          value
        );
      });
    }
  }
}
