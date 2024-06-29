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
import { ProductMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ProductFormGroup,
  ProductUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { ProductService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ProductRoutes: Routes = [
  {
    path: '',
    title: 'Product',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Product', icon: 'table' },
        { route: ['editor'], label: 'New Product', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions(toTableColumnOptions(ProductMetadata)),
      provideInputOptions(toFormInputOptions(ProductMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ProductMetadata)),
      provideFormGroup(ProductFormGroup()),
      provideUpdateFormGroup(ProductUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Product');
    },
  },
];
