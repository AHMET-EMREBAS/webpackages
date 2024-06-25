import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SkuDetailMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SkuDetailFormGroup } from '@webpackages/clients/form-groups';
import { SkuDetailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SkuDetailRoutes: Routes = [
  {
    path: '',
    title: 'SkuDetail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View SkuDetails', icon: 'table' },
        { route: ['editor'], label: 'New SkuDetail', icon: 'add' },
      ]),
      provideEntityCollectionService(SkuDetailService),
      provideTableColumnOptions(toTableColumnOptions(SkuDetailMetadata)),
      provideInputOptions(toFormInputOptions(SkuDetailMetadata)),
      provideFormGroup(SkuDetailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
