import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { JobsService, JobsComponent, SortJobsPipe } from "./jobs";
import { ProjectsService, ProjectsComponent } from "./projects";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    ProjectsComponent,
    SortJobsPipe
  ],
  providers: [
    JobsService,
    ProjectsService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
