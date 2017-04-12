import { Component } from "@angular/core";

@Component({
  selector: "app",
  template: "<router-outlet></router-outlet>",
  host: { "class": "c-app" }
})
export class AppComponent { }
