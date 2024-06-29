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
import { PurchaseMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  PurchaseFormGroup,
  UpdatePurchaseFormGroup,
} from '@webpackages/clients/form-groups';
import { PurchaseService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const PurchaseRoutes: Routes = [
  {
    path: '',
    title: 'Purchase',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Purchase', icon: 'table' },
        { route: ['editor'], label: 'New Purchase', icon: 'add' },
      ]),
      provideEntityCollectionService(PurchaseService),
      provideTableColumnOptions(toTableColumnOptions(PurchaseMetadata)),
      provideInputOptions(toFormInputOptions(PurchaseMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(PurchaseMetadata)),
      provideFormGroup(PurchaseFormGroup()),
      provideUpdateFormGroup(UpdatePurchaseFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Purchase');
    },
  },
];
