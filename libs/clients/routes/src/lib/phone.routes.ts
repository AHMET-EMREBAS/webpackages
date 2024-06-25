import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { PhoneMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { PhoneFormGroup } from '@webpackages/clients/form-groups';
import { PhoneService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PhoneRoutes: Routes = [
  {
    path: '',
    title: 'Phone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Phones', icon: 'table' },
        { route: ['editor'], label: 'New Phone', icon: 'add' },
      ]),
      provideEntityCollectionService(PhoneService),
      provideTableColumnOptions(toTableColumnOptions(PhoneMetadata)),
      provideInputOptions(toFormInputOptions(PhoneMetadata)),
      provideFormGroup(PhoneFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
