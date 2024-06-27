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
import { DepartmentMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  DepartmentFormGroup,
  UpdateDepartmentFormGroup,
} from '@webpackages/clients/form-groups';
import { DepartmentService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const DepartmentRoutes: Routes = [
  {
    path: '',
    title: 'Department',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Department', icon: 'table' },
        { route: ['editor'], label: 'New Department', icon: 'add' },
      ]),
      provideEntityCollectionService(DepartmentService),
      provideTableColumnOptions(toTableColumnOptions(DepartmentMetadata)),
      provideInputOptions(toFormInputOptions(DepartmentMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(DepartmentMetadata)),
      provideFormGroup(DepartmentFormGroup),
      provideUpdateFormGroup(UpdateDepartmentFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Department');
    },
  },
];
