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
import { UserMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  UserFormGroup,
  UpdateUserFormGroup,
} from '@webpackages/clients/form-groups';
import { UserService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserRoutes: Routes = [
  {
    path: '',
    title: 'User',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View User', icon: 'table' },
        { route: ['editor'], label: 'New User', icon: 'add' },
      ]),
      provideEntityCollectionService(UserService),
      provideTableColumnOptions(toTableColumnOptions(UserMetadata)),
      provideInputOptions(toFormInputOptions(UserMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(UserMetadata)),
      provideFormGroup(UserFormGroup),
      provideUpdateFormGroup(UpdateUserFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
