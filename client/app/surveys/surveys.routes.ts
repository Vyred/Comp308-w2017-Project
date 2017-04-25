import { Routes } from '@angular/router';
import { SurveysComponent} from './surveys.component';

import { ListComponent } from './list/list.component';

export const SurveysRoutes:Routes = [{
  path: 'surveys',
  component: SurveysComponent,
  children: [
    {path: '/survey', component: ListComponent}
  ]
}];
