import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ProjectMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ProjectFormGroup } from '@webpackages/clients/form-groups';
import { ProjectService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ProjectRoutes: Routes = [
  {
    path: '',
    title: 'Project',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Projects', icon: 'table' },
        { route: ['editor'], label: 'New Project', icon: 'add' },
      ]),
      provideEntityCollectionService(ProjectService),
      provideTableColumnOptions(toTableColumnOptions(ProjectMetadata)),
      provideInputOptions(toFormInputOptions(ProjectMetadata)),
      provideFormGroup(ProjectFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
