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
import { CartMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CartFormGroup,
  CartUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { CartService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CartRoutes: Routes = [
  {
    path: '',
    title: 'Cart',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Cart', icon: 'table' },
        { route: ['editor'], label: 'New Cart', icon: 'add' },
      ]),
      provideEntityCollectionService(CartService),
      provideTableColumnOptions(toTableColumnOptions(CartMetadata)),
      provideInputOptions(toFormInputOptions(CartMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(CartMetadata)),
      provideFormGroup(CartFormGroup()),
      provideUpdateFormGroup(CartUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Cart');
    },
  },
];
