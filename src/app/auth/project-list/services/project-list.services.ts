import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  {Project} from '../models/project.models';


@Injectable()
	export class ProjectListservices {
		projects: Array<Project> = [];
		constructor(private _http: Http){

	}

	getAll() : Observable<Array<Project>>{
	   const url='http://localhost:8089/projects';
	   const headers = new Headers({'Content-Type': 'application/json'});
	   const option = new RequestOptions({
	   	headers: headers
	   });
	   return this._http.get(url).map((response)=> {
	   	console.log(response);
	   return response.json();
	   });

	   	//next()
	   //return Observable.create(this.projects);
	}
}
