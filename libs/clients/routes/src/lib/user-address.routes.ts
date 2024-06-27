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
import { UserAddressMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  UserAddressFormGroup,
  UpdateUserAddressFormGroup,
} from '@webpackages/clients/form-groups';
import { UserAddressService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const UserAddressRoutes: Routes = [
  {
    path: '',
    title: 'UserAddress',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserAddress', icon: 'table' },
        { route: ['editor'], label: 'New UserAddress', icon: 'add' },
      ]),
      provideEntityCollectionService(UserAddressService),
      provideTableColumnOptions(toTableColumnOptions(UserAddressMetadata)),
      provideInputOptions(toFormInputOptions(UserAddressMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(UserAddressMetadata)),
      provideFormGroup(UserAddressFormGroup),
      provideUpdateFormGroup(UpdateUserAddressFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('UserAddress');
    },
  },
];
