import { Route, Routes } from '@angular/router';
import {
  CategoryRoutes,
  PriceLevelRoutes,
  PriceRoutes,
  ProductRoutes,
  PurchaseRoutes,
  QuantityRoutes,
  SerialNumberRoutes,
  SkuDetailRoutes,
  SkuRoutes,
  StoreRoutes,
  SupplierRoutes,
} from '@webpackages/clients/routes';
import { AppLayoutComponent } from '@webpackages/material/layout';
import {
  provideNavListItems,
  provideResouceName,
} from '@webpackages/material/core';
import { CustomProductRoutes } from './custom-product.routes';

function __route(resourceName: string, routes: Routes): Route {
  return {
    path: resourceName.toLowerCase(),
    providers: [provideResouceName(resourceName)],
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
        { label: 'Sku Detail', icon: 'info', route: 'skudetail' },

        { label: 'Price', icon: 'money', route: 'price' },
        { label: 'Price Level', icon: 'layers', route: 'pricelevel' },

        {
          label: 'Serial Number',
          icon: '1x_mobiledata',
          route: 'serialnumber',
        },
        { label: 'Quantity', icon: 'numbers', route: 'quantity' },
        { label: 'Category', icon: 'category', route: 'category' },
        { label: 'Supplier', icon: 'forklift', route: 'supplier' },
        { label: 'Store', icon: 'store', route: 'store' },
        { label: 'Purchase', icon: 'shopping_bag', route: 'purchase' },
      ]),
    ],

    children: [
      __route('Product', CustomProductRoutes),
      __route('Sku', SkuRoutes),
      __route('SkuDetail', SkuDetailRoutes),

      __route('price', PriceRoutes),
      __route('PriceLevel', PriceLevelRoutes),

      __route('SerialNumber', SerialNumberRoutes),
      __route('Quantity', QuantityRoutes),

      __route('Category', CategoryRoutes),

      __route('Category', CategoryRoutes),
      __route('Store', StoreRoutes),
      __route('Supplier', SupplierRoutes),
      __route('Purchase', PurchaseRoutes),
    ],
  },
];
