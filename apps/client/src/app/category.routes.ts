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
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
import { TableComponent } from '@webpackages/material/table';
import { ICategory } from '@webpackages/models';
import { CategoryMetadata } from '@webpackages/metadata';
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
      provideEntityCollectionService(CategoryService),
      provideTableColumnOptions([{ name: 'name', label: 'Category Name' }]),
      provideInputOptions([
        ...Object.entries(CategoryMetadata.properties).map(([key, value]) => {
          return { name: key, ...value };
        }),
      ]),
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
