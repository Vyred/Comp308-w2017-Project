import { Component } from '@angular/core';
import { SurveysService } from '../surveys.service';

@Component({
  selector: 'list',
  templateUrl: 'app/surveys/list/list.template.html'
})
export class ListComponent{
  surveys: any;
  errorMessage: string;
  constructor(private _surveysService: SurveysService){}

  ngOnInit() {
    this._surveysService.list().subscribe(surveys => this.surveys = surveys);
  }
}
