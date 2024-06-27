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
import { SessionMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SessionFormGroup,
  UpdateSessionFormGroup,
} from '@webpackages/clients/form-groups';
import { SessionService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const SessionRoutes: Routes = [
  {
    path: '',
    title: 'Session',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Session', icon: 'table' },
        { route: ['editor'], label: 'New Session', icon: 'add' },
      ]),
      provideEntityCollectionService(SessionService),
      provideTableColumnOptions(toTableColumnOptions(SessionMetadata)),
      provideInputOptions(toFormInputOptions(SessionMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SessionMetadata)),
      provideFormGroup(SessionFormGroup),
      provideUpdateFormGroup(UpdateSessionFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Session');
    },
  },
];
