import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { AccessTokenMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { AccessTokenFormGroup } from '@webpackages/clients/form-groups';
import { AccessTokenService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const AccessTokenRoutes: Routes = [
  {
    path: '',
    title: 'AccessToken',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View AccessTokens', icon: 'table' },
        { route: ['editor'], label: 'New AccessToken', icon: 'add' },
      ]),
      provideEntityCollectionService(AccessTokenService),
      provideTableColumnOptions(toTableColumnOptions(AccessTokenMetadata)),
      provideInputOptions(toFormInputOptions(AccessTokenMetadata)),
      provideFormGroup(AccessTokenFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
