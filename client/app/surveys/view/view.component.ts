import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { SurveysService } from '../surveys.service';

@Component({
  selector: 'view',
  templateUrl: 'app/surveys/view/view.template.html',
})
export class ViewComponent {
	user: any;
	survey: any;
	routingObserver: any;
	errorMessage: string;
	allowEdit: boolean = false;

	constructor(private _router:Router, 
				private _route: ActivatedRoute, 
				private _authenticationService: AuthenticationService, 
				private _surveysService: SurveysService) {}

	ngOnInit() {
		this.user = this._authenticationService.user

		this.routingObserver = this._route.params.subscribe(params => {
			let surveyId = params['surveyId'];

			this._surveysService
				.read(surveyId)
				.subscribe(
					survey => {
						this.survey = survey;
						this.allowEdit = (this.user && this.user._id === this.survey.creator._id);
		 			},
					error => this._router.navigate(['/survey'])
				);
		});
	}

	ngOnDestroy() {
		this.routingObserver.unsubscribe();
	}

	delete() {
		this._surveysService.delete(this.survey._id).subscribe(deletedArticle => this._router.navigate(['/survey']),
																 error => this.errorMessage = error);
	}
}