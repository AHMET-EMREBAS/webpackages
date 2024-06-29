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
import { ProductImgMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ProductImgFormGroup,
  ProductImgUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { ProductImgService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ProductImgRoutes: Routes = [
  {
    path: '',
    title: 'ProductImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View ProductImg', icon: 'table' },
        { route: ['editor'], label: 'New ProductImg', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductImgService),
      provideTableColumnOptions(toTableColumnOptions(ProductImgMetadata)),
      provideInputOptions(toFormInputOptions(ProductImgMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ProductImgMetadata)),
      provideFormGroup(ProductImgFormGroup()),
      provideUpdateFormGroup(ProductImgUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('ProductImg');
    },
  },
];
