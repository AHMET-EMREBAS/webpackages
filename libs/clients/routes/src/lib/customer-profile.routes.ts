import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerProfileMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerProfileFormGroup } from '@webpackages/clients/form-groups';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerProfileRoutes: Routes = [
  {
    path: '',
    title: 'CustomerProfile',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerProfiles', icon: 'table' },
        { route: ['editor'], label: 'New CustomerProfile', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerProfileService),
      provideTableColumnOptions(toTableColumnOptions(CustomerProfileMetadata)),
      provideInputOptions(toFormInputOptions(CustomerProfileMetadata)),
      provideFormGroup(CustomerProfileFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
