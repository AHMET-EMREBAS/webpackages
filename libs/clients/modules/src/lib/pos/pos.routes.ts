import { Route, Routes } from '@angular/router';
import { CartRoutes, OrderRoutes } from '@webpackages/clients/routes';
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

export const PosRoutes: Routes = [
  {
    path: '',
    title: 'POS',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([
        { label: 'Cart', icon: 'shopping_cart', route: 'cart' },
        { label: 'Order', icon: 'inventory', route: 'order' },
      ]),
    ],

    children: [__route('Cart', CartRoutes), __route('Order', OrderRoutes)],
  },
];
