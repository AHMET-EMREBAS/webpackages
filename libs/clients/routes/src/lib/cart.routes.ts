import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CartMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CartFormGroup } from '@webpackages/clients/form-groups';
import { CartService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CartRoutes: Routes = [
  {
    path: '',
    title: 'Cart',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Carts', icon: 'table' },
        { route: ['editor'], label: 'New Cart', icon: 'add' },
      ]),
      provideEntityCollectionService(CartService),
      provideTableColumnOptions(toTableColumnOptions(CartMetadata)),
      provideInputOptions(toFormInputOptions(CartMetadata)),
      provideFormGroup(CartFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
