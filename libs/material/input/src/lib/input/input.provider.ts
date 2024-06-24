import { FormControl } from '@angular/forms';
import { InputOptions } from '../input/input-options';
import { createValueProvider } from '@webpackages/material/core';
import { Provider } from '@angular/core';
import {
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MatAutocompleteDefaultOptions,
} from '@angular/material/autocomplete';
import { isNotUndefined } from '@webpackages/utils';

export type InputIndicatorHandler<T> = (
  control: FormControl,
  options: InputOptions
) => T;

export type InputErrorMessageHandler = InputIndicatorHandler<string>;
export type InputStatusIndicatorHandler = InputIndicatorHandler<string>;

export const defaultErrorMessageHandler: InputErrorMessageHandler = function (
  control: FormControl,
  options: InputOptions
): string {
  const errors = control.errors;
  if (errors) {
    if (errors['required']) return `Field is required!`;
    if (errors['minlength'])
      return `Field most be longer than ${options.inputMinLength} characters!`;
    if (errors['maxlengh'])
      return `Field most be shorter than ${options.inputMaxLength} characters!`;
    if (errors['min'])
      return `Field most be longer than ${options.inputMin} characters!`;
    if (errors['max'])
      return `Field most be shorter than ${options.inputMax} characters!`;
    if (errors['email']) return `Field most be a valid email!`;
    if (errors['password']) return `Field most be a strong password!`;
  }
  return 'Field is invalid';
};

export const defaultInputStatusIndicatorHandler: InputStatusIndicatorHandler = (
  control,
  options
) => {
  if (options.inputType === 'text' || options.inputType === 'textarea') {
    const value = control.value;
    if (options.inputMinLength) {
      if (value.length < options.inputMinLength) {
        return `( ⬆ / ${options.inputMinLength})`;
      }
    }

    return `( ${value?.length} / ${options.inputMaxLength || '*'} )`;
  } else if (options.inputType === 'number') {
    const value = parseFloat(control.value + '');

    const { inputMin, inputMax } = options;
    if (isNotUndefined(value)) {
      if (inputMin != undefined && value < inputMin) {
        return `( ⬆ ${options.inputMin} )`;
      } else if (inputMax != undefined && value > inputMax) {
        return `( ⬇ ${options.inputMax} )`;
      }
      return '( ✔ )';
    } else {
      return '';
    }
  }
  return '';
};

export const {
  token: getInputErrorMessageHandlerToken,
  provide: provideInputErrorMessageHandler,
  default: provideDefaultInputErrorMesssageHandler,
} = createValueProvider('ErrorMessageHandler', defaultErrorMessageHandler);

export const {
  token: getInputStatusIndicatorHandlerToken,
  provide: provideInputStatusIndicatorHander,
  default: provideDefaultInputStatusIndicatorHandler,
} = createValueProvider(
  'StatusIndicatorHandler',
  defaultInputStatusIndicatorHandler
);

export const {
  default: provideDefaultInputDebounceTime,
  provide: provideInputDebounceTime,
  token: getInputDebounceTimeToken,
} = createValueProvider<number>('InputDebouceTime', 400);

export const provideDefaultAutocompleteOptions = (): Provider => {
  return {
    provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
    useValue: {
      autoActiveFirstOption: true,
      hideSingleSelectionIndicator: true,
    } as MatAutocompleteDefaultOptions,
  };
};
