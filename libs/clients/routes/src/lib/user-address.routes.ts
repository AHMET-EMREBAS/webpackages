import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserAddressMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserAddressFormGroup } from '@webpackages/clients/form-groups';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserAddressRoutes: Routes = [
  {
    path: '',
    title: 'UserAddress',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserAddresss', icon: 'table' },
        { route: ['editor'], label: 'New UserAddress', icon: 'add' },
      ]),
      provideEntityCollectionService(UserAddressService),
      provideTableColumnOptions(toTableColumnOptions(UserAddressMetadata)),
      provideInputOptions(toFormInputOptions(UserAddressMetadata)),
      provideFormGroup(UserAddressFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
