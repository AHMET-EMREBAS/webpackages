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
import { ProfileMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ProfileFormGroup,
  ProfileUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { ProfileService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ProfileRoutes: Routes = [
  {
    path: '',
    title: 'Profile',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Profile', icon: 'table' },
        { route: ['editor'], label: 'New Profile', icon: 'add' },
      ]),
      provideEntityCollectionService(ProfileService),
      provideTableColumnOptions(toTableColumnOptions(ProfileMetadata)),
      provideInputOptions(toFormInputOptions(ProfileMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ProfileMetadata)),
      provideFormGroup(ProfileFormGroup()),
      provideUpdateFormGroup(ProfileUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Profile');
    },
  },
];
