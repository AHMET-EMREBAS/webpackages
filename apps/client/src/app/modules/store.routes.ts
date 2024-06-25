import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { IStore } from '@webpackages/models';
import { StoreMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CrudRoutes } from './crud.routes';

@Injectable()
export class StoreService extends EntityCollectionServiceBase<IStore> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Store', factory);
  }
}

export const StoreRoutes: Routes = [
  {
    path: '',
    title: 'Store',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Stores', icon: 'table' },
        { route: ['editor'], label: 'New Store', icon: 'add' },
      ]),
      provideEntityCollectionService(StoreService),
      provideTableColumnOptions(toTableColumnOptions(StoreMetadata)),
      provideInputOptions(toFormInputOptions(StoreMetadata)),
      provideFormGroup(
        new FormGroup({
          name: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        })
      ),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
