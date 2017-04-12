import { Component } from "@angular/core";

import { Job } from "./job.model";
import { JobsService } from "./jobs.service";

@Component({
  selector: "jobs",
  templateUrl: "./jobs.component.html",
  host: {
    "aria-labelledby": "jobs-headline",
    "class": "c-jobs c-band",
    "role": "region"
  }
})
export class JobsComponent {
  jobs: Job[];

  constructor(private jobsService: JobsService) { }

  getJobs() {
    return this.jobsService.getJobs()
      .subscribe(jobs => {
        return this.jobs = jobs;
      },
      error => {
        console.log("Error occurred here");
        console.log(error);
      },
      () => {
        console.log("Jobs retrieval completed");
      });
  }

  ngOnInit() {
    this.jobs = <Job[]>[];

    this.getJobs();
  }
}
