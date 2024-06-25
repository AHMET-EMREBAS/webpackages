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
import { FormComponent } from '@webpackages/material/form';
import { TableComponent } from '@webpackages/material/table';
import { ICategory } from '@webpackages/models';
import { CategoryMetadata } from '@webpackages/metadata';
import { toFormInputOptions } from '@webpackages/types';
import { ModuleLayoutComponent } from '@webpackages/material/layout';
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
    component: ModuleLayoutComponent,
    providers: [
      provideSubModuleNavListItems([]),
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions([{ name: 'name', label: 'Category Name' }]),
      provideInputOptions(toFormInputOptions(CategoryMetadata)),
      provideFormGroup(
        new FormGroup({
          name: new FormControl('', [
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
