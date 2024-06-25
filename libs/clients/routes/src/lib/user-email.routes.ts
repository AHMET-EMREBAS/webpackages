import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserEmailMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserEmailFormGroup } from '@webpackages/clients/form-groups';
import { UserEmailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserEmailRoutes: Routes = [
  {
    path: '',
    title: 'UserEmail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserEmails', icon: 'table' },
        { route: ['editor'], label: 'New UserEmail', icon: 'add' },
      ]),
      provideEntityCollectionService(UserEmailService),
      provideTableColumnOptions(toTableColumnOptions(UserEmailMetadata)),
      provideInputOptions(toFormInputOptions(UserEmailMetadata)),
      provideFormGroup(UserEmailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
