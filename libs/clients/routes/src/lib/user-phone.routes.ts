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
import { UserPhoneMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  UserPhoneFormGroup,
  UpdateUserPhoneFormGroup,
} from '@webpackages/clients/form-groups';
import { UserPhoneService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const UserPhoneRoutes: Routes = [
  {
    path: '',
    title: 'UserPhone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserPhone', icon: 'table' },
        { route: ['editor'], label: 'New UserPhone', icon: 'add' },
      ]),
      provideEntityCollectionService(UserPhoneService),
      provideTableColumnOptions(toTableColumnOptions(UserPhoneMetadata)),
      provideInputOptions(toFormInputOptions(UserPhoneMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(UserPhoneMetadata)),
      provideFormGroup(UserPhoneFormGroup()),
      provideUpdateFormGroup(UpdateUserPhoneFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('UserPhone');
    },
  },
];
