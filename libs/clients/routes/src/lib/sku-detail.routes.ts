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
import { SkuDetailMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SkuDetailFormGroup,
  UpdateSkuDetailFormGroup,
} from '@webpackages/clients/form-groups';
import { SkuDetailService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const SkuDetailRoutes: Routes = [
  {
    path: '',
    title: 'SkuDetail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View SkuDetail', icon: 'table' },
        { route: ['editor'], label: 'New SkuDetail', icon: 'add' },
      ]),
      provideEntityCollectionService(SkuDetailService),
      provideTableColumnOptions(toTableColumnOptions(SkuDetailMetadata)),
      provideInputOptions(toFormInputOptions(SkuDetailMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SkuDetailMetadata)),
      provideFormGroup(SkuDetailFormGroup()),
      provideUpdateFormGroup(UpdateSkuDetailFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('SkuDetail');
    },
  },
];
