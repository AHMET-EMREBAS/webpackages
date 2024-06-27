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
import { OrganizationMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  OrganizationFormGroup,
  UpdateOrganizationFormGroup,
} from '@webpackages/clients/form-groups';
import { OrganizationService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const OrganizationRoutes: Routes = [
  {
    path: '',
    title: 'Organization',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Organization', icon: 'table' },
        { route: ['editor'], label: 'New Organization', icon: 'add' },
      ]),
      provideEntityCollectionService(OrganizationService),
      provideTableColumnOptions(toTableColumnOptions(OrganizationMetadata)),
      provideInputOptions(toFormInputOptions(OrganizationMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(OrganizationMetadata)),
      provideFormGroup(OrganizationFormGroup),
      provideUpdateFormGroup(UpdateOrganizationFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Organization');
    },
  },
];
