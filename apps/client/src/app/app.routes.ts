import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { InventoryManagementModule } from '@webpackages/clients';
import { CategoryRoutes } from './category.routes';
import { AppComponent } from './app.component';
import { provideDefaultTableOptions } from '@webpackages/material/core';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { ProductRoutes } from './product.routes';

export const appRoutes: Route[] = [
  {
    path: 'web',
    loadComponent() {
      return NxWelcomeComponent;
    },
  },
  {
    path: 'inventory',
    providers: [
      provideDefaultTableOptions(),
      provideDefaultInputErrorMesssageHandler(),
      provideDefaultInputStatusIndicatorHandler(),
      provideDefaultInputDebounceTime(),
    ],
    children: [
      {
        path: 'category',
        loadChildren() {
          return CategoryRoutes;
        },
      },
      {
        path: 'product',
        loadChildren() {
          return ProductRoutes;
        },
      },
    ],
  },
];
