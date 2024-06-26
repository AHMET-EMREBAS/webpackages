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
import { PurchaseOrderMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  PurchaseOrderFormGroup,
  UpdatePurchaseOrderFormGroup,
} from '@webpackages/clients/form-groups';
import { PurchaseOrderService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PurchaseOrderRoutes: Routes = [
  {
    path: '',
    title: 'PurchaseOrder',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View PurchaseOrder', icon: 'table' },
        { route: ['editor'], label: 'New PurchaseOrder', icon: 'add' },
      ]),
      provideEntityCollectionService(PurchaseOrderService),
      provideTableColumnOptions(toTableColumnOptions(PurchaseOrderMetadata)),
      provideInputOptions(toFormInputOptions(PurchaseOrderMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(PurchaseOrderMetadata)
      ),
      provideFormGroup(PurchaseOrderFormGroup),
      provideUpdateFormGroup(UpdatePurchaseOrderFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
