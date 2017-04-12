import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { CONFIG } from "../core";
import { Job } from "./job.model";

let jobsUrl = CONFIG.baseUrls.jobs;

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  getJobs() {
    return <Observable<Job[]>>this.http
      .get(jobsUrl)
      .map((response: Response) => <Job[]>response.json())
      .catch(this.handleError);
  }

  getJob(jobId: string) {
    return <Observable<Job>>this.http
      .get(`${jobsUrl}/${jobId}`)
      .map((response: Response) => <Job>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
