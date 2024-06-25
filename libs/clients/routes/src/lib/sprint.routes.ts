import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SprintMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SprintFormGroup } from '@webpackages/clients/form-groups';
import { SprintService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SprintRoutes: Routes = [
  {
    path: '',
    title: 'Sprint',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Sprints', icon: 'table' },
        { route: ['editor'], label: 'New Sprint', icon: 'add' },
      ]),
      provideEntityCollectionService(SprintService),
      provideTableColumnOptions(toTableColumnOptions(SprintMetadata)),
      provideInputOptions(toFormInputOptions(SprintMetadata)),
      provideFormGroup(SprintFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
