import { Pipe, PipeTransform } from "@angular/core";

import { Job } from "../job.model";

@Pipe({ name: "sortJobs" })
export class SortJobsPipe implements PipeTransform {
  transform(value: Job[], args?: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Job, b: Job) => {
      if (a.start_date < b.start_date) { return 1; }
      if (a.start_date > b.start_date) { return -1; }
      return 0;
    });
  }
}
