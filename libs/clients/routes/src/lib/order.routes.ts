import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { OrderMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { OrderFormGroup } from '@webpackages/clients/form-groups';
import { OrderService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const OrderRoutes: Routes = [
  {
    path: '',
    title: 'Order',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Orders', icon: 'table' },
        { route: ['editor'], label: 'New Order', icon: 'add' },
      ]),
      provideEntityCollectionService(OrderService),
      provideTableColumnOptions(toTableColumnOptions(OrderMetadata)),
      provideInputOptions(toFormInputOptions(OrderMetadata)),
      provideFormGroup(OrderFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
