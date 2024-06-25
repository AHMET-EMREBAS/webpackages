import { Route } from '@angular/router';
import { ProductRoutes } from './product.routes';

export const appRoutes: Route[] = [
  {
    path: 'product',
    loadChildren() {
      return ProductRoutes;
    },
  },
];
