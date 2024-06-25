import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { QuantityMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { QuantityFormGroup } from '@webpackages/clients/form-groups';
import { QuantityService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const QuantityRoutes: Routes = [
  {
    path: '',
    title: 'Quantity',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Quantitys', icon: 'table' },
        { route: ['editor'], label: 'New Quantity', icon: 'add' },
      ]),
      provideEntityCollectionService(QuantityService),
      provideTableColumnOptions(toTableColumnOptions(QuantityMetadata)),
      provideInputOptions(toFormInputOptions(QuantityMetadata)),
      provideFormGroup(QuantityFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
