import { Route } from '@angular/router';
import { InventoryRoutes } from '@webpackages/clients/modules';
export const appRoutes: Route[] = [
  {
    path: 'inventory',
    loadChildren() {
      return InventoryRoutes;
    },
  },
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   providers: [
  //     provideNavListItems([
  //       { icon: 'inventory2', label: 'Product', route: 'product' },
  //       { icon: 'barcode', label: 'Sku', route: 'sku' },
  //       { icon: 'numbers', label: 'Quantity', route: 'quantity' },
  //       { icon: 'money', label: 'Price', route: 'price' },
  //       { icon: 'layers', label: 'Price Level', route: 'price-level' },
  //       { icon: 'money', label: 'Price Level', route: 'price-level' },
  //       { icon: 'store', label: 'Store', route: 'store' },
  //     ]),
  //   ],

  //   children: [
  //     {
  //       path: 'product',
  //       loadChildren() {
  //         return ProductRoutes;
  //       },
  //     },
  //   ],
  // },
];
