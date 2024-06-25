import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { InventoryManagementModule } from '@webpackages/clients';
import { CategoryRoutes } from './category.routes';

export const appRoutes: Route[] = [
  {
    path: 'web',
    loadComponent() {
      return NxWelcomeComponent;
    },
  },
  {
    path: 'category',
    loadChildren() {
      return CategoryRoutes;
    },
  },
];
