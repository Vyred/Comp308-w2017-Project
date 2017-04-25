import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {SurveysService} from '../surveys.service';

@Component({
  selector: 'create',
  templateUrl: 'app/surveys/create/create.template.html'
})
export class CreateComponent {
	survey: any = {};
	errorMessage: string;

	constructor(private _router:Router,
				private _surveysService: SurveysService) {}

	create() {
		this._surveysService.create(this.survey).subscribe(createdSurvey => this._router.navigate(['/survey', createdSurvey._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}