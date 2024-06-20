import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { InventoryManagementModule } from '@webpackages/clients';
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent() {
      return NxWelcomeComponent;
    },
  },
  {
    path: 'inventory-management',
    loadChildren() {
      return InventoryManagementModule;
    },
  },
];
