import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../../../components/mainComponents/projects/projects.component';
import { AboutmeComponent } from '../../../components/mainComponents/aboutme/aboutme.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, AboutmeComponent],
  imports: [
    TranslateModule.forChild({
      defaultLanguage:'es'
    }),
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule { }
