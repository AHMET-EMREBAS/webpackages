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
import { TaskMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  TaskFormGroup,
  UpdateTaskFormGroup,
} from '@webpackages/clients/form-groups';
import { TaskService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const TaskRoutes: Routes = [
  {
    path: '',
    title: 'Task',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Task', icon: 'table' },
        { route: ['editor'], label: 'New Task', icon: 'add' },
      ]),
      provideEntityCollectionService(TaskService),
      provideTableColumnOptions(toTableColumnOptions(TaskMetadata)),
      provideInputOptions(toFormInputOptions(TaskMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(TaskMetadata)),
      provideFormGroup(TaskFormGroup()),
      provideUpdateFormGroup(UpdateTaskFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Task');
    },
  },
];
