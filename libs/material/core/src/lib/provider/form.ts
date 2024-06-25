import { FormGroup } from '@angular/forms';
import { createValueProvider } from './create-provider';
import { PropertyOptions } from '@webpackages/types';

export const { provide: provideFormGroup, token: getFormGroupToken } =
  createValueProvider<FormGroup | null>('FormGroup', null);

export const { provide: provideInputOptions, token: getInputOptionsToken } =
  createValueProvider<Partial<PropertyOptions>[]>('InputOptions', []);
