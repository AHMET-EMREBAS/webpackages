import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CategoryMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CategoryFormGroup } from '@webpackages/clients/form-groups';
import { CategoryService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CategoryRoutes: Routes = [
  {
    path: '',
    title: 'Category',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Categorys', icon: 'table' },
        { route: ['editor'], label: 'New Category', icon: 'add' },
      ]),
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions(toTableColumnOptions(CategoryMetadata)),
      provideInputOptions(toFormInputOptions(CategoryMetadata)),
      provideFormGroup(CategoryFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
