import { InjectionToken, Provider } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputOptions } from '../input/input-options';

export type InputErrorMessageHandler = (
  control: FormControl,
  options: InputOptions
) => string;

export const defaultErrorMessageParser: InputErrorMessageHandler = function (
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

export const InputErrorMessageHandlerToken = new InjectionToken(
  'InputErrorMessageHandlerToken'
);

export function provideInputErrorMessageHandler(
  useValue: InputErrorMessageHandler
): Provider {
  return {
    provide: InputErrorMessageHandlerToken,
    useValue,
  };
}

export function provideDefaultInputErrorMesssageHandler() {
  return provideInputErrorMessageHandler(defaultErrorMessageParser);
}

export type InputStatusIndicatorHandler = (
  control: FormControl,
  options: InputOptions
) => string;

export const InputStatusIndicatorHandlerToken = new InjectionToken(
  'InputStatusIndicatorHandlerToken'
);

export const defaultInputStatusIndicatorHandler: InputStatusIndicatorHandler = (
  control,
  options
) => {
  return `(${control.value?.length}/${options.inputMaxLength || '*'})`;
};

export function provideInputStatusIndicatorHander(
  useValue: InputStatusIndicatorHandler
) {
  return {
    provide: InputStatusIndicatorHandlerToken,
    useValue,
  };
}

export function provideDefaultInputStatusIndicatorHandler(): Provider {
  return provideInputStatusIndicatorHander(defaultInputStatusIndicatorHandler);
}
