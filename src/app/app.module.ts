import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/mainComponents/nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './pages/mainPages/home/home.module';
import { AboutModule } from './pages/mainPages/about/about.module';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FooterComponent } from './components/mainComponents/footer/footer.component';
import { ProjectsComponent } from './components/mainComponents/projects/projects.component';
import { AboutmeComponent } from './components/mainComponents/aboutme/aboutme.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
    AboutModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
