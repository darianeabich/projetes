import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const usersRoutes: Route[] = [
  {
    path: '',
    component: UserListComponent,
    data: {
      title: 'Lista de Usuários',
    },
  },
  // {
  //   path: 'form',
  // },
];
