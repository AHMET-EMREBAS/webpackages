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
import { PriceMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  PriceFormGroup,
  UpdatePriceFormGroup,
} from '@webpackages/clients/form-groups';
import { PriceService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const PriceRoutes: Routes = [
  {
    path: '',
    title: 'Price',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Price', icon: 'table' },
        { route: ['editor'], label: 'New Price', icon: 'add' },
      ]),
      provideEntityCollectionService(PriceService),
      provideTableColumnOptions(toTableColumnOptions(PriceMetadata)),
      provideInputOptions(toFormInputOptions(PriceMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(PriceMetadata)),
      provideFormGroup(PriceFormGroup()),
      provideUpdateFormGroup(UpdatePriceFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Price');
    },
  },
];
