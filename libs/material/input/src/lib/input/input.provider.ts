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
  if (control.hasError('required')) return `Field is required!`;
  else if (control.hasError('minlength'))
    return `Field most be longer than ${options.inputMinLength} characters!`;
  else if (control.hasError('maxlengh'))
    return `Field most be shorter than ${options.inputMaxLength} characters!`;
  else if (control.hasError('min'))
    return `Field most be longer than ${options.inputMin} characters!`;
  else if (control.hasError('max'))
    return `Field most be shorter than ${options.inputMax} characters!`;
  else if (control.hasError('email')) return `Field most be a valid email!`;
  else if (control.hasError('password'))
    return `Field most be a strong password!`;
  else if (control.hasError('isUnique')) return `Field must be unique!`;

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
