import { Route } from '@angular/router';
import { TechniqueListComponent } from './technique-list/technique-list.component';

export const techniqueRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: TechniqueListComponent,
    data: {
      title: 'Lista de Técnicas',
    },
  },
  // {
  //   path: 'form',
  //   // component: TechniqueListComponent,
  // },
];
