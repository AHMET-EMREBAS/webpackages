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

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      provideDefaultTableOptions(),
      provideDefaultInputErrorMesssageHandler(),
      provideDefaultInputStatusIndicatorHandler(),
      provideDefaultInputDebounceTime(),
    ],
    children: [
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
    ],
  },
];
