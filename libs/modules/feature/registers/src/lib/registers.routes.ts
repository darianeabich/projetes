import { Route } from '@angular/router';

export const registerRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((r) => r.usersRoutes),
  },
];
