import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserProfileMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserProfileFormGroup } from '@webpackages/clients/form-groups';
import { UserProfileService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserProfileRoutes: Routes = [
  {
    path: '',
    title: 'UserProfile',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserProfiles', icon: 'table' },
        { route: ['editor'], label: 'New UserProfile', icon: 'add' },
      ]),
      provideEntityCollectionService(UserProfileService),
      provideTableColumnOptions(toTableColumnOptions(UserProfileMetadata)),
      provideInputOptions(toFormInputOptions(UserProfileMetadata)),
      provideFormGroup(UserProfileFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
