import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { CONFIG } from "../core";
import { Project } from "./project.model";

let projectsUrl = CONFIG.baseUrls.projects;

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getProjects() {
    return <Observable<Project[]>>this.http
      .get(projectsUrl)
      .map((response: Response) => <Project[]>response.json())
      .catch(this.handleError);
  }

  getProject(projectId: string) {
    return <Observable<Project>>this.http
      .get(`${projectsUrl}/${projectId}`)
      .map((response: Response) => <Project>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
