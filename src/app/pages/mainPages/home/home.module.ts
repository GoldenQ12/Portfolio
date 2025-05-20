import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../../../components/mainComponents/projects/projects.component';
import { AboutmeComponent } from '../../../components/mainComponents/aboutme/aboutme.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, AboutmeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule { }