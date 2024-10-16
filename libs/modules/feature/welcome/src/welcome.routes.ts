import { Route } from '@angular/router';
import { FormLoginComponent } from './lib/form-login/form-login.component';
import { FormSignupComponent } from './lib/form-signup/form-signup.component';
import { ShowRoomComponent } from './lib/show-room/show-room.component';
import { WelcomeComponent } from './lib/welcome/welcome.component';
export const welcomeRoutes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      title: 'Boas vindas',
    },
    children: [
      {
        path: '',
        component: ShowRoomComponent,
        data: {
          title: 'Apresentação',
        },
      },
      {
        path: 'login',
        component: FormLoginComponent,
        data: {
          title: 'Login',
        },
      },
      {
        path: 'signup',
        component: FormSignupComponent,
        data: {
          title: 'Cadastrar',
        },
      },
    ],
  },
];
