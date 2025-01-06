import { Component } from '@angular/core';
import { HeaderSideComponent } from "../header-side/header-side.component";
import { CommonModule } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  imports: [HeaderSideComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Devpalsinh Chauhan";
  isUpdateAvailable: boolean = false;
  constructor(private updates: SwUpdate) {
    // Check if the app is up-to-date
    this.updates.versionUpdates.subscribe((event) => {
      console.log(event);
      if (event.type === "VERSION_READY") {
          console.log("Hello, version update here")
      }
    });
  }
}
