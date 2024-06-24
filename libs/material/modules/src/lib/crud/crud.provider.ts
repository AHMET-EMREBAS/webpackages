import {
  InputOption,
  MockEntityCollectionService,
  createClassProvider,
  createValueProvider,
} from '@webpackages/material/core';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { FormGroup } from '@angular/forms';

export const {
  provide: provideEntityCollectionService,
  token: getEntityCollectionServiceToken,
} = createClassProvider<EntityCollectionServiceBase<any>>(
  'EntityCollectionService',
  MockEntityCollectionService
);

export const { provide: provideFormGroup, token: getFormGroupToken } =
  createValueProvider<FormGroup | null>('FormGroup', null);

export const { provide: provideInputOptions, token: getInputOptionsToken } =
  createValueProvider<InputOption[]>('InputOptions', []);
