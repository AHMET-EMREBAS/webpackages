import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SessionMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SessionFormGroup } from '@webpackages/clients/form-groups';
import { SessionService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SessionRoutes: Routes = [
  {
    path: '',
    title: 'Session',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Sessions', icon: 'table' },
        { route: ['editor'], label: 'New Session', icon: 'add' },
      ]),
      provideEntityCollectionService(SessionService),
      provideTableColumnOptions(toTableColumnOptions(SessionMetadata)),
      provideInputOptions(toFormInputOptions(SessionMetadata)),
      provideFormGroup(SessionFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
