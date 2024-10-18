import { Route } from '@angular/router';
import { ThematicListComponent } from './thematics/thematic-list/thematic-list.component';

export const registerRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((r) => r.usersRoutes),
  },
  {
    path: 'thematics',
    component: ThematicListComponent,
  },
];
