import { Route, Routes } from '@angular/router';
import { AccessTokenRoutes, UserRoutes } from '@webpackages/clients/routes';
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

export const AdminRoutes: Routes = [
  {
    path: '',
    title: 'Administration',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([{ label: 'User', icon: 'user', route: 'user' }]),
    ],

    children: [
      __route('User', UserRoutes),
      __route('AccessToken', AccessTokenRoutes),
    ],
  },
];
