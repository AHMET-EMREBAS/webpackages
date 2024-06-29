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
import { UserEmailMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  UserEmailFormGroup,
  UserEmailUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { UserEmailService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const UserEmailRoutes: Routes = [
  {
    path: '',
    title: 'UserEmail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserEmail', icon: 'table' },
        { route: ['editor'], label: 'New UserEmail', icon: 'add' },
      ]),
      provideEntityCollectionService(UserEmailService),
      provideTableColumnOptions(toTableColumnOptions(UserEmailMetadata)),
      provideInputOptions(toFormInputOptions(UserEmailMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(UserEmailMetadata)),
      provideFormGroup(UserEmailFormGroup()),
      provideUpdateFormGroup(UserEmailUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('UserEmail');
    },
  },
];
