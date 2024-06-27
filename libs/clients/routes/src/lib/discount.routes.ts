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
import { DiscountMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  DiscountFormGroup,
  UpdateDiscountFormGroup,
} from '@webpackages/clients/form-groups';
import { DiscountService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const DiscountRoutes: Routes = [
  {
    path: '',
    title: 'Discount',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Discount', icon: 'table' },
        { route: ['editor'], label: 'New Discount', icon: 'add' },
      ]),
      provideEntityCollectionService(DiscountService),
      provideTableColumnOptions(toTableColumnOptions(DiscountMetadata)),
      provideInputOptions(toFormInputOptions(DiscountMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(DiscountMetadata)),
      provideFormGroup(DiscountFormGroup),
      provideUpdateFormGroup(UpdateDiscountFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Discount');
    },
  },
];
