import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { TaskMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { TaskFormGroup } from '@webpackages/clients/form-groups';
import { TaskService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const TaskRoutes: Routes = [
  {
    path: '',
    title: 'Task',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Tasks', icon: 'table' },
        { route: ['editor'], label: 'New Task', icon: 'add' },
      ]),
      provideEntityCollectionService(TaskService),
      provideTableColumnOptions(toTableColumnOptions(TaskMetadata)),
      provideInputOptions(toFormInputOptions(TaskMetadata)),
      provideFormGroup(TaskFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
