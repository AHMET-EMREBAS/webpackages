import { Route, Routes } from '@angular/router';
import { CustomerRoutes } from '@webpackages/clients/routes';
import {
  provideNavListItems,
  provideResouceName,
} from '@webpackages/material/core';
import { AppLayoutComponent } from '@webpackages/material/layout';

function __route(resourceName: string, routes: Routes): Route {
  return {
    path: resourceName.toLowerCase(),
    providers: [provideResouceName(resourceName)],
    loadChildren() {
      return routes;
    },
  };
}

export const CmsRoutes: Routes = [
  {
    path: '',
    title: 'Inventory',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([
        { label: 'Customer', icon: 'customer', route: 'customer' },
      ]),
    ],

    children: [__route('Customer', CustomerRoutes)],
  },
];
