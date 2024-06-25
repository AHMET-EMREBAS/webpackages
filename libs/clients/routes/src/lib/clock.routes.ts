import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ClockMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ClockFormGroup } from '@webpackages/clients/form-groups';
import { ClockService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ClockRoutes: Routes = [
  {
    path: '',
    title: 'Clock',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Clocks', icon: 'table' },
        { route: ['editor'], label: 'New Clock', icon: 'add' },
      ]),
      provideEntityCollectionService(ClockService),
      provideTableColumnOptions(toTableColumnOptions(ClockMetadata)),
      provideInputOptions(toFormInputOptions(ClockMetadata)),
      provideFormGroup(ClockFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
