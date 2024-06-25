import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ManufacturerMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ManufacturerFormGroup } from '@webpackages/clients/form-groups';
import { ManufacturerService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ManufacturerRoutes: Routes = [
  {
    path: '',
    title: 'Manufacturer',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Manufacturers', icon: 'table' },
        { route: ['editor'], label: 'New Manufacturer', icon: 'add' },
      ]),
      provideEntityCollectionService(ManufacturerService),
      provideTableColumnOptions(toTableColumnOptions(ManufacturerMetadata)),
      provideInputOptions(toFormInputOptions(ManufacturerMetadata)),
      provideFormGroup(ManufacturerFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
