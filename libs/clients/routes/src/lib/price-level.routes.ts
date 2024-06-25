import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { PriceLevelMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { PriceLevelFormGroup } from '@webpackages/clients/form-groups';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PriceLevelRoutes: Routes = [
  {
    path: '',
    title: 'PriceLevel',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View PriceLevels', icon: 'table' },
        { route: ['editor'], label: 'New PriceLevel', icon: 'add' },
      ]),
      provideEntityCollectionService(PriceLevelService),
      provideTableColumnOptions(toTableColumnOptions(PriceLevelMetadata)),
      provideInputOptions(toFormInputOptions(PriceLevelMetadata)),
      provideFormGroup(PriceLevelFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
