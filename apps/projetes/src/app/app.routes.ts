/* eslint-disable @nx/enforce-module-boundaries */
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('@projetes/welcome').then((r) => r.welcomeRoutes),
  },
  {
    path: 'home',
    loadComponent: () => import('@projetes/home').then((m) => m.HomeComponent),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@projetes/registers').then((r) => r.registerRoutes),
  },
];
