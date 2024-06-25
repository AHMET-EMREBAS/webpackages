import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SaleMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SaleFormGroup } from '@webpackages/clients/form-groups';
import { SaleService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SaleRoutes: Routes = [
  {
    path: '',
    title: 'Sale',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Sales', icon: 'table' },
        { route: ['editor'], label: 'New Sale', icon: 'add' },
      ]),
      provideEntityCollectionService(SaleService),
      provideTableColumnOptions(toTableColumnOptions(SaleMetadata)),
      provideInputOptions(toFormInputOptions(SaleMetadata)),
      provideFormGroup(SaleFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
