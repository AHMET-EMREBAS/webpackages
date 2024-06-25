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
import { ICategory } from '@webpackages/models';
import { CategoryMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CrudRoutes } from './crud.routes';

@Injectable()
export class CategoryService extends EntityCollectionServiceBase<ICategory> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory);
  }
}

export const CategoryRoutes: Routes = [
  {
    path: '',
    title: 'Category',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Categories', icon: 'table' },
        { route: ['editor'], label: 'New Category', icon: 'add' },
      ]),
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions(toTableColumnOptions(CategoryMetadata)),
      provideInputOptions(toFormInputOptions(CategoryMetadata)),
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
