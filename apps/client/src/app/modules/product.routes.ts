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
import { ProductMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ProductFormGroup } from '@webpackages/clients/form-groups';
import { CrudRoutes } from './crud.routes';
import { ProductService } from '@webpackages/clients/ngrx';

export const ProductRoutes: Routes = [
  {
    path: '',
    title: 'Product',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Products', icon: 'table' },
        { route: ['editor'], label: 'New Product', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions(toTableColumnOptions(ProductMetadata)),
      provideInputOptions(toFormInputOptions(ProductMetadata)),
      provideFormGroup(ProductFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
