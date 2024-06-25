import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { DepartmentMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { DepartmentFormGroup } from '@webpackages/clients/form-groups';
import { DepartmentService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const DepartmentRoutes: Routes = [
  {
    path: '',
    title: 'Department',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Departments', icon: 'table' },
        { route: ['editor'], label: 'New Department', icon: 'add' },
      ]),
      provideEntityCollectionService(DepartmentService),
      provideTableColumnOptions(toTableColumnOptions(DepartmentMetadata)),
      provideInputOptions(toFormInputOptions(DepartmentMetadata)),
      provideFormGroup(DepartmentFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
