import { Route } from '@angular/router';
import { TechniqueFormComponent } from './technique-form/technique-form.component';
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
  {
    path: 'form',
    component: TechniqueFormComponent,
    data: {
      title: 'Cadastro de Técnicas',
    },
  },
];
