import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class SurveysService {
  private _baseURL = '/survey';
  constructor(private _http: Http) {
  }

  create(surveys: any): Observable<any> {
		return this._http
			.post(this._baseURL, surveys)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}
	
	read(surveysId: string): Observable<any> {
		return this._http
			.get(`${this._baseURL}/${surveysId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	update(surveys: any): Observable<any> {
		return this._http
			.put(`${this._baseURL}/${surveys._id}`, surveys)
			.map((res: Response) => res.json())
			.catch(this.handleError);
  	}

	delete(surveysId: any): Observable<any> {
		return this._http
			.delete(`${this._baseURL}/${surveysId}`)
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}	

  list() :Observable<any> {
    return this._http
    .get(this._baseURL)
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().message || 'Server Error');
  }

}
