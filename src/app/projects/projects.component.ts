import { Component } from "@angular/core";

import { Project } from "./project.model";
import { ProjectsService } from "./projects.service";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  host: {
    "aria-labelledby": "projects-headline",
    "class": "c-projects [ c-band c-band--tint ]",
    "role": "region"
  }
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  getProjects() {
    return this.projectsService.getProjects()
      .subscribe(projects => {
        return this.projects = projects;
      },
      error => {
        console.log("Error occurred here");
        console.log(error);
      },
      () => {
        console.log("Projects retrieval completed");
      });
  }

  ngOnInit() {
    this.projects = <Project[]>[];

    this.getProjects();
  }
}
