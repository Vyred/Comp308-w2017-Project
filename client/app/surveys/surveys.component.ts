import { Component } from '@angular/core';
import { SurveysService } from './surveys.service';

@Component({
  selector: 'surveys-app',
  template: '<router-outlet></router-outlet>',
  providers: [SurveysService]
})
export class SurveysComponent {}
