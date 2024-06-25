import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SerialNumberMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SerialNumberFormGroup } from '@webpackages/clients/form-groups';
import { SerialNumberService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SerialNumberRoutes: Routes = [
  {
    path: '',
    title: 'SerialNumber',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View SerialNumbers', icon: 'table' },
        { route: ['editor'], label: 'New SerialNumber', icon: 'add' },
      ]),
      provideEntityCollectionService(SerialNumberService),
      provideTableColumnOptions(toTableColumnOptions(SerialNumberMetadata)),
      provideInputOptions(toFormInputOptions(SerialNumberMetadata)),
      provideFormGroup(SerialNumberFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
