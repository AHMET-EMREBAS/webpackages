import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { DiscountMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { DiscountFormGroup } from '@webpackages/clients/form-groups';
import { DiscountService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const DiscountRoutes: Routes = [
  {
    path: '',
    title: 'Discount',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Discounts', icon: 'table' },
        { route: ['editor'], label: 'New Discount', icon: 'add' },
      ]),
      provideEntityCollectionService(DiscountService),
      provideTableColumnOptions(toTableColumnOptions(DiscountMetadata)),
      provideInputOptions(toFormInputOptions(DiscountMetadata)),
      provideFormGroup(DiscountFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
