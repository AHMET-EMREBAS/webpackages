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
import { StoreMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  StoreFormGroup,
  UpdateStoreFormGroup,
} from '@webpackages/clients/form-groups';
import { StoreService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const StoreRoutes: Routes = [
  {
    path: '',
    title: 'Store',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Store', icon: 'table' },
        { route: ['editor'], label: 'New Store', icon: 'add' },
      ]),
      provideEntityCollectionService(StoreService),
      provideTableColumnOptions(toTableColumnOptions(StoreMetadata)),
      provideInputOptions(toFormInputOptions(StoreMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(StoreMetadata)),
      provideFormGroup(StoreFormGroup),
      provideUpdateFormGroup(UpdateStoreFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Store');
    },
  },
];
