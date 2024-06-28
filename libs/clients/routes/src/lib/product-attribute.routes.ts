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
import { ProductAttributeMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ProductAttributeFormGroup,
  UpdateProductAttributeFormGroup,
} from '@webpackages/clients/form-groups';
import { ProductAttributeService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ProductAttributeRoutes: Routes = [
  {
    path: '',
    title: 'ProductAttribute',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View ProductAttribute', icon: 'table' },
        { route: ['editor'], label: 'New ProductAttribute', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductAttributeService),
      provideTableColumnOptions(toTableColumnOptions(ProductAttributeMetadata)),
      provideInputOptions(toFormInputOptions(ProductAttributeMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(ProductAttributeMetadata)
      ),
      provideFormGroup(ProductAttributeFormGroup),
      provideUpdateFormGroup(UpdateProductAttributeFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('ProductAttribute');
    },
  },
];
