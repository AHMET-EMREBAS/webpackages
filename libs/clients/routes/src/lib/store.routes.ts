import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { StoreMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { StoreFormGroup } from '@webpackages/clients/form-groups';
import { StoreService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const StoreRoutes: Routes = [
  {
    path: '',
    title: 'Store',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Stores', icon: 'table' },
        { route: ['editor'], label: 'New Store', icon: 'add' },
      ]),
      provideEntityCollectionService(StoreService),
      provideTableColumnOptions(toTableColumnOptions(StoreMetadata)),
      provideInputOptions(toFormInputOptions(StoreMetadata)),
      provideFormGroup(StoreFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
