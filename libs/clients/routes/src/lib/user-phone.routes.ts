import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserPhoneMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserPhoneFormGroup } from '@webpackages/clients/form-groups';
import { UserPhoneService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserPhoneRoutes: Routes = [
  {
    path: '',
    title: 'UserPhone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserPhones', icon: 'table' },
        { route: ['editor'], label: 'New UserPhone', icon: 'add' },
      ]),
      provideEntityCollectionService(UserPhoneService),
      provideTableColumnOptions(toTableColumnOptions(UserPhoneMetadata)),
      provideInputOptions(toFormInputOptions(UserPhoneMetadata)),
      provideFormGroup(UserPhoneFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
