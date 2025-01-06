import { Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch : "full" }, // Default route
    { path: 'home', component: HomeComponent, pathMatch : "full" }, // Default route
    { path: 'contact', component: ContactComponent, pathMatch : "full" }, // Default route
    { path: 'projects', component: ProjectsComponent },
  ];