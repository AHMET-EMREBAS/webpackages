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
import { CategoryMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CategoryFormGroup,
  CategoryUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { CategoryService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CategoryRoutes: Routes = [
  {
    path: '',
    title: 'Category',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Category', icon: 'table' },
        { route: ['editor'], label: 'New Category', icon: 'add' },
      ]),
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions(toTableColumnOptions(CategoryMetadata)),
      provideInputOptions(toFormInputOptions(CategoryMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(CategoryMetadata)),
      provideFormGroup(CategoryFormGroup()),
      provideUpdateFormGroup(CategoryUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Category');
    },
  },
];
