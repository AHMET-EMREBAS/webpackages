import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { PriceMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { PriceFormGroup } from '@webpackages/clients/form-groups';
import { PriceService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PriceRoutes: Routes = [
  {
    path: '',
    title: 'Price',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Prices', icon: 'table' },
        { route: ['editor'], label: 'New Price', icon: 'add' },
      ]),
      provideEntityCollectionService(PriceService),
      provideTableColumnOptions(toTableColumnOptions(PriceMetadata)),
      provideInputOptions(toFormInputOptions(PriceMetadata)),
      provideFormGroup(PriceFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
