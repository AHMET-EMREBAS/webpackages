import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { InventoryManagementModule } from '@webpackages/clients';
import { ProductRoutes } from './product.routes';

export const appRoutes: Route[] = [
  {
    path: 'web',
    loadComponent() {
      return NxWelcomeComponent;
    },
  },
  {
    path: '',
    loadChildren() {
      return ProductRoutes;
    },
  },
];
