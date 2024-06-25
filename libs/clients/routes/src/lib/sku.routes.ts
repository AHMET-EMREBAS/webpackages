import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SkuMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SkuFormGroup } from '@webpackages/clients/form-groups';
import { SkuService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SkuRoutes: Routes = [
  {
    path: '',
    title: 'Sku',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Skus', icon: 'table' },
        { route: ['editor'], label: 'New Sku', icon: 'add' },
      ]),
      provideEntityCollectionService(SkuService),
      provideTableColumnOptions(toTableColumnOptions(SkuMetadata)),
      provideInputOptions(toFormInputOptions(SkuMetadata)),
      provideFormGroup(SkuFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
