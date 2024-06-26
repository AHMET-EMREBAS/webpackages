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
import { ClockMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ClockFormGroup,
  UpdateClockFormGroup,
} from '@webpackages/clients/form-groups';
import { ClockService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ClockRoutes: Routes = [
  {
    path: '',
    title: 'Clock',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Clock', icon: 'table' },
        { route: ['editor'], label: 'New Clock', icon: 'add' },
      ]),
      provideEntityCollectionService(ClockService),
      provideTableColumnOptions(toTableColumnOptions(ClockMetadata)),
      provideInputOptions(toFormInputOptions(ClockMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ClockMetadata)),
      provideFormGroup(ClockFormGroup),
      provideUpdateFormGroup(UpdateClockFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
