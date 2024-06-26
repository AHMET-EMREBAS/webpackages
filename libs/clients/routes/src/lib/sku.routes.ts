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
import { SkuMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SkuFormGroup,
  UpdateSkuFormGroup,
} from '@webpackages/clients/form-groups';
import { SkuService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SkuRoutes: Routes = [
  {
    path: '',
    title: 'Sku',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Sku', icon: 'table' },
        { route: ['editor'], label: 'New Sku', icon: 'add' },
      ]),
      provideEntityCollectionService(SkuService),
      provideTableColumnOptions(toTableColumnOptions(SkuMetadata)),
      provideInputOptions(toFormInputOptions(SkuMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SkuMetadata)),
      provideFormGroup(SkuFormGroup),
      provideUpdateFormGroup(UpdateSkuFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
