import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { PurchaseMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { PurchaseFormGroup } from '@webpackages/clients/form-groups';
import { PurchaseService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PurchaseRoutes: Routes = [
  {
    path: '',
    title: 'Purchase',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Purchases', icon: 'table' },
        { route: ['editor'], label: 'New Purchase', icon: 'add' },
      ]),
      provideEntityCollectionService(PurchaseService),
      provideTableColumnOptions(toTableColumnOptions(PurchaseMetadata)),
      provideInputOptions(toFormInputOptions(PurchaseMetadata)),
      provideFormGroup(PurchaseFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
