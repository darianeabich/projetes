import { Route } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

export const usersRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListComponent,
    data: {
      title: 'Lista de Usuários',
    },
  },
  {
    path: 'form',
    component: UserFormComponent,
  },
];
