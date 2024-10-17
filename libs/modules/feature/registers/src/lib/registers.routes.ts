import { Route } from '@angular/router';
import { RegisterComponent } from './register.component';

export const registerRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.routes').then((r) => r.usersRoutes),
      },
    ],
  },
];
