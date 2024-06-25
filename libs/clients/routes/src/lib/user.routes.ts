import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserFormGroup } from '@webpackages/clients/form-groups';
import { UserService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserRoutes: Routes = [
  {
    path: '',
    title: 'User',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Users', icon: 'table' },
        { route: ['editor'], label: 'New User', icon: 'add' },
      ]),
      provideEntityCollectionService(UserService),
      provideTableColumnOptions(toTableColumnOptions(UserMetadata)),
      provideInputOptions(toFormInputOptions(UserMetadata)),
      provideFormGroup(UserFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
