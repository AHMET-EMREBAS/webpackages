import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { AppEventMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { AppEventFormGroup } from '@webpackages/clients/form-groups';
import { AppEventService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const AppEventRoutes: Routes = [
  {
    path: '',
    title: 'AppEvent',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View AppEvents', icon: 'table' },
        { route: ['editor'], label: 'New AppEvent', icon: 'add' },
      ]),
      provideEntityCollectionService(AppEventService),
      provideTableColumnOptions(toTableColumnOptions(AppEventMetadata)),
      provideInputOptions(toFormInputOptions(AppEventMetadata)),
      provideFormGroup(AppEventFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
