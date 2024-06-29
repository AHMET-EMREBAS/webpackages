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
import { ProjectMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ProjectFormGroup,
  ProjectUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { ProjectService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ProjectRoutes: Routes = [
  {
    path: '',
    title: 'Project',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Project', icon: 'table' },
        { route: ['editor'], label: 'New Project', icon: 'add' },
      ]),
      provideEntityCollectionService(ProjectService),
      provideTableColumnOptions(toTableColumnOptions(ProjectMetadata)),
      provideInputOptions(toFormInputOptions(ProjectMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ProjectMetadata)),
      provideFormGroup(ProjectFormGroup()),
      provideUpdateFormGroup(ProjectUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Project');
    },
  },
];
