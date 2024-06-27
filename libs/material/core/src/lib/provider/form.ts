import { FormGroup } from '@angular/forms';
import { createValueProvider } from './create-provider';
import { PropertyOptions } from '@webpackages/types';

export const { provide: provideFormGroup, token: getFormGroupToken } =
  createValueProvider<FormGroup | null>('FormGroup', null);

export const { provide: provideUpdateFormGroup, token: getUpdateFormGroupToken } =
  createValueProvider<FormGroup | null>('UpdateFormGroup', null);


export const { provide: provideInputOptions, token: getInputOptionsToken } =
  createValueProvider<Partial<PropertyOptions>[]>('InputOptions', []);

export const { provide: provideUpdateInputOptions, token: getUpdateInputOptionsToken } =
  createValueProvider<Partial<PropertyOptions>[]>('UpdateInputOptions', []);


  