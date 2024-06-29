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
import { OrderMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  OrderFormGroup,
  OrderUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { OrderService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const OrderRoutes: Routes = [
  {
    path: '',
    title: 'Order',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Order', icon: 'table' },
        { route: ['editor'], label: 'New Order', icon: 'add' },
      ]),
      provideEntityCollectionService(OrderService),
      provideTableColumnOptions(toTableColumnOptions(OrderMetadata)),
      provideInputOptions(toFormInputOptions(OrderMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(OrderMetadata)),
      provideFormGroup(OrderFormGroup()),
      provideUpdateFormGroup(OrderUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Order');
    },
  },
];
