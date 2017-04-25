import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveysService } from '../surveys.service';


@Component({
  selector: 'edit',
  templateUrl: 'app/surveys/edit/edit.template.html'
})
export class EditComponent {
	survey: any = {};
	errorMessage: string;
	paramsObserver: any;

	constructor(private _router:Router, 
				private _route: ActivatedRoute, 
				private _surveysService: SurveysService) {}

	ngOnInit() {
		this.paramsObserver = this._route.params.subscribe(params => {
			let surveyId = params['surveyId'];

			this._surveysService.read(surveyId).subscribe(survey => {
																this.survey = survey;
													 		},
															error => this._router.navigate(['/survey']));
		});
	}

	ngOnDestroy() {
		this.paramsObserver.unsubscribe();
	}
	
	update() {
		this._surveysService.update(this.survey).subscribe(savedSurvey => this._router.navigate(['/survey', savedSurvey._id]),
							 				  				 error =>  this.errorMessage = error);
	}
}