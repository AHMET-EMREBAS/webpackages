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
import { SaleMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SaleFormGroup,
  UpdateSaleFormGroup,
} from '@webpackages/clients/form-groups';
import { SaleService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const SaleRoutes: Routes = [
  {
    path: '',
    title: 'Sale',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Sale', icon: 'table' },
        { route: ['editor'], label: 'New Sale', icon: 'add' },
      ]),
      provideEntityCollectionService(SaleService),
      provideTableColumnOptions(toTableColumnOptions(SaleMetadata)),
      provideInputOptions(toFormInputOptions(SaleMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SaleMetadata)),
      provideFormGroup(SaleFormGroup()),
      provideUpdateFormGroup(UpdateSaleFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Sale');
    },
  },
];
