import { Routes } from '@angular/router';
import { InventoryManagementComponent } from './inventory-management.component';
import { ProductRoutes } from './product/product.routes';

export const InventoryManagementRoutes: Routes = [
  {
    path: '',
    component: InventoryManagementComponent,
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
