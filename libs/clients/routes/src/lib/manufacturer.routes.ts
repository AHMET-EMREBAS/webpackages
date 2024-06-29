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
import { ManufacturerMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ManufacturerFormGroup,
  UpdateManufacturerFormGroup,
} from '@webpackages/clients/form-groups';
import { ManufacturerService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ManufacturerRoutes: Routes = [
  {
    path: '',
    title: 'Manufacturer',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Manufacturer', icon: 'table' },
        { route: ['editor'], label: 'New Manufacturer', icon: 'add' },
      ]),
      provideEntityCollectionService(ManufacturerService),
      provideTableColumnOptions(toTableColumnOptions(ManufacturerMetadata)),
      provideInputOptions(toFormInputOptions(ManufacturerMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ManufacturerMetadata)),
      provideFormGroup(ManufacturerFormGroup()),
      provideUpdateFormGroup(UpdateManufacturerFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Manufacturer');
    },
  },
];
