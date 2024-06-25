import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { OrganizationMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { OrganizationFormGroup } from '@webpackages/clients/form-groups';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const OrganizationRoutes: Routes = [
  {
    path: '',
    title: 'Organization',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Organizations', icon: 'table' },
        { route: ['editor'], label: 'New Organization', icon: 'add' },
      ]),
      provideEntityCollectionService(OrganizationService),
      provideTableColumnOptions(toTableColumnOptions(OrganizationMetadata)),
      provideInputOptions(toFormInputOptions(OrganizationMetadata)),
      provideFormGroup(OrganizationFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
