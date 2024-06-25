import { Route } from '@angular/router';
import { ProductRoutes } from './modules';
import { AppLayoutComponent } from '@webpackages/material/layout';
import {
  provideNavListItems,
  provideSubModuleNavListItems,
} from '@webpackages/material/core';
export const appRoutes: Route[] = [
  {
    path: '',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([
        { label: 'Product', route: 'product' },
        { label: 'Sku', route: 'sku' },
        { label: 'Quantity', route: 'quantity' },
        { label: 'Price', route: 'price' },
        { label: 'Price Level', route: 'price-level' },
        { label: 'Price Level', route: 'price-level' },
        { label: 'Store', route: 'store' },
      ]),
    ],

    children: [
      {
        path: 'product',
        loadChildren() {
          return ProductRoutes;
        },
      },
    ],
  },
];
