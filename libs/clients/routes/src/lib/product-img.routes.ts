import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ProductImgMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ProductImgFormGroup } from '@webpackages/clients/form-groups';
import { ProductImgService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ProductImgRoutes: Routes = [
  {
    path: '',
    title: 'ProductImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View ProductImgs', icon: 'table' },
        { route: ['editor'], label: 'New ProductImg', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductImgService),
      provideTableColumnOptions(toTableColumnOptions(ProductImgMetadata)),
      provideInputOptions(toFormInputOptions(ProductImgMetadata)),
      provideFormGroup(ProductImgFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
