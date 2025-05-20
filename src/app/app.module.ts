import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/mainComponents/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './pages/mainPages/home/home.module';
import { AboutModule } from './pages/mainPages/about/about.module';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FooterComponent } from './components/mainComponents/footer/footer.component';
import { ProjectsComponent } from './components/mainComponents/projects/projects.component';
import { AboutmeComponent } from './components/mainComponents/aboutme/aboutme.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    NgxParticlesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    HomeModule,
    AboutModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
