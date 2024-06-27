import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { QuantityMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  QuantityFormGroup,
  UpdateQuantityFormGroup,
} from '@webpackages/clients/form-groups';
import { QuantityService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const QuantityRoutes: Routes = [
  {
    path: '',
    title: 'Quantity',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Quantity', icon: 'table' },
        { route: ['editor'], label: 'New Quantity', icon: 'add' },
      ]),
      provideEntityCollectionService(QuantityService),
      provideTableColumnOptions(toTableColumnOptions(QuantityMetadata)),
      provideInputOptions(toFormInputOptions(QuantityMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(QuantityMetadata)),
      provideFormGroup(QuantityFormGroup),
      provideUpdateFormGroup(UpdateQuantityFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Quantity');
    },
  },
];
