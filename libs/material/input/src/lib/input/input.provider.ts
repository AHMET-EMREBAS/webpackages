import { FormControl } from '@angular/forms';
import { InputOptions } from '../input/input-options';
import { createValueProvider } from '@webpackages/material/core';

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
  if (options.inputType === 'text') {
    const value = control.value;
    if (options.inputMinLength) {
      if (value.length < options.inputMinLength) {
        return `( ⬆ / ${options.inputMinLength})`;
      }
    }

    return `( ${value?.length} / ${options.inputMaxLength || '*'} )`;
  } else if (options.inputType === 'number') {
    const value = parseFloat(control.value + '');

    if (value < options.inputMin) {
      return `( ⬆ ${options.inputMin} )`;
    } else if (value > options.inputMax) {
      return `( ⬇ ${options.inputMax} )`;
    }
    return '( ✔ )';
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
