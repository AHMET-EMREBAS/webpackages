import { Route } from '@angular/router';
import {
  CmsRoutes,
  InventoryRoutes,
  PmsRoutes,
  PosRoutes,
} from '@webpackages/clients/modules';
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
  {
    path: 'cms',
    loadChildren() {
      return CmsRoutes;
    },
  },
  {
    path: 'pos',
    loadChildren() {
      return PosRoutes;
    },
  },
];
