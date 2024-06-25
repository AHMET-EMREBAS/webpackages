import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ProfileMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ProfileFormGroup } from '@webpackages/clients/form-groups';
import { ProfileService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ProfileRoutes: Routes = [
  {
    path: '',
    title: 'Profile',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Profiles', icon: 'table' },
        { route: ['editor'], label: 'New Profile', icon: 'add' },
      ]),
      provideEntityCollectionService(ProfileService),
      provideTableColumnOptions(toTableColumnOptions(ProfileMetadata)),
      provideInputOptions(toFormInputOptions(ProfileMetadata)),
      provideFormGroup(ProfileFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
