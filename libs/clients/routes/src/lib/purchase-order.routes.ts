import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { PurchaseOrderFormGroup } from '@webpackages/clients/form-groups';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PurchaseOrderRoutes: Routes = [
  {
    path: '',
    title: 'PurchaseOrder',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View PurchaseOrders', icon: 'table' },
        { route: ['editor'], label: 'New PurchaseOrder', icon: 'add' },
      ]),
      provideEntityCollectionService(PurchaseOrderService),
      provideTableColumnOptions(toTableColumnOptions(PurchaseOrderMetadata)),
      provideInputOptions(toFormInputOptions(PurchaseOrderMetadata)),
      provideFormGroup(PurchaseOrderFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
