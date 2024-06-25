import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import {
  provideDefaultTableOptions,
  provideEntityCollectionService,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
import { TableComponent } from '@webpackages/material/table';
import { ICategory } from '@webpackages/models';

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
      ...provideDefaultTableOptions(),
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions([{ name: 'name', label: 'Category Name' }]),
    ],

    children: [
      {
        path: 'create',
        loadComponent() {
          return FormComponent;
        },
      },
      {
        path: 'editor/:id',
        loadComponent() {
          return FormComponent;
        },
      },
      {
        path: '',
        loadComponent() {
          return TableComponent;
        },
      },
    ],
  },
];
