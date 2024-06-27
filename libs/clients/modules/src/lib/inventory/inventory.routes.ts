import { Route, Routes } from '@angular/router';
import {
  CategoryRoutes,
  PriceLevelRoutes,
  PriceRoutes,
  ProductRoutes,
  QuantityRoutes,
  SerialNumberRoutes,
  SkuDetailRoutes,
  SkuRoutes,
  StoreRoutes,
} from '@webpackages/clients/routes';
import { AppLayoutComponent } from '@webpackages/material/layout';
import { provideNavListItems } from '@webpackages/material/core';

function __route(path: string, routes: Routes): Route {
  return {
    path,
    loadChildren() {
      return routes;
    },
  };
}
export const InventoryRoutes: Route[] = [
  {
    path: '',
    title: 'Inventory',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([
        { label: 'Product', icon: 'inventory2', route: 'product' },
        { label: 'Sku', icon: 'barcode', route: 'sku' },
        { label: 'Sku Details', icon: 'info', route: 'sku-details' },

        { label: 'Price', icon: 'money', route: 'price' },
        { label: 'Price Level', icon: 'layers', route: 'price-level' },

        {
          label: 'Serial Number',
          icon: '1x_mobiledata',
          route: 'serial-number',
        },
        { label: 'Quantity', icon: 'numbers', route: 'quantity' },
        { label: 'Store', icon: 'store', route: 'store' },
        { label: 'Category', icon: 'category', route: 'category' },
      ]),
    ],

    children: [
      __route('product', ProductRoutes),
      __route('sku', SkuRoutes),
      __route('sku-details', SkuDetailRoutes),

      __route('price', PriceRoutes),
      __route('price-level', PriceLevelRoutes),

      __route('serial-number', SerialNumberRoutes),
      __route('quantity', QuantityRoutes),

      __route('category', CategoryRoutes),

      __route('store', StoreRoutes),
      __route('category', CategoryRoutes),
    ],
  },
];
