import { Route } from '@angular/router';
import { InventoryRoutes, PmsRoutes } from '@webpackages/clients/modules';
import { NxWelcomeComponent } from './nx-welcome.component';
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return NxWelcomeComponent;
    },
  },
  {
    path: 'inventory',
    loadChildren() {
      return InventoryRoutes;
    },
  },
  {
    path: 'pms',
    loadChildren() {
      return PmsRoutes;
    },
  },
];
