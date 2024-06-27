import { Route, Routes } from '@angular/router';
import {
  ProjectRoutes,
  SprintRoutes,
  TaskRoutes,
} from '@webpackages/clients/routes';
import { AppLayoutComponent } from '@webpackages/material/layout';
import { provideNavListItems } from '@webpackages/material/core';

function __route(path: string, routes: Routes): Route {
  return {
    path,
    loadChildren() {
      return routes;
    },
  };
}
export const PmsRoutes: Route[] = [
  {
    path: '',
    title: 'PMS',
    component: AppLayoutComponent,
    providers: [
      provideNavListItems([
        { label: 'Project', icon: 'tactic', route: 'project' },
        { label: 'Sprint', icon: 'sprint', route: 'sprint' },
        { label: 'Task', icon: 'task', route: 'task' },
      ]),
    ],

    children: [
      __route('project', ProjectRoutes),
      __route('sprint', SprintRoutes),
      __route('task', TaskRoutes),
    ],
  },
];
