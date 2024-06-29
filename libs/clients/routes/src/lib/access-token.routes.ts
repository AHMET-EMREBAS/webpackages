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
import { AccessTokenMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  AccessTokenFormGroup,
  AccessTokenUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { AccessTokenService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const AccessTokenRoutes: Routes = [
  {
    path: '',
    title: 'AccessToken',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View AccessToken', icon: 'table' },
        { route: ['editor'], label: 'New AccessToken', icon: 'add' },
      ]),
      provideEntityCollectionService(AccessTokenService),
      provideTableColumnOptions(toTableColumnOptions(AccessTokenMetadata)),
      provideInputOptions(toFormInputOptions(AccessTokenMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(AccessTokenMetadata)),
      provideFormGroup(AccessTokenFormGroup()),
      provideUpdateFormGroup(AccessTokenUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('AccessToken');
    },
  },
];
