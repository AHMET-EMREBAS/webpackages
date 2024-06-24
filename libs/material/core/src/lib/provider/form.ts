import { FormGroup } from '@angular/forms';
import { createValueProvider } from './create-provider';
import { InputOption } from '../types';

export const { provide: provideFormGroup, token: getFormGroupToken } =
  createValueProvider<FormGroup | null>('FormGroup', null);

export const { provide: provideInputOptions, token: getInputOptionsToken } =
  createValueProvider<InputOption[]>('InputOptions', []);
