import { loadSlim } from '@tsparticles/slim';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgParticlesService } from "@tsparticles/angular";
import { Container, Engine, ParticlesOptions } from '@tsparticles/engine';
import { MoveDirection, ClickEvent, OutMode } from "@tsparticles/engine";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit  {

  id = "tsparticles";
  translations: {[key: string]: string} = {};

  private engine! : Engine;
  particlesOptions = {
      fpsLimit: 120,
      interactivity: {
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
      },
      particles: {
          color: {
              value: "#e24826",
          },
          links: {
              color: "#cd4629",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          move: {
              direction: MoveDirection.none,
              enable: true,
              outModes: {
                  default: OutMode.bounce,
              },
              random: false,
              speed: 0.9,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 100,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "polygon",
          },
          size: {
              value: { min: 1, max: 3 },
          },
      },
      detectRetina: true,
  };

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private dataService : DataService,
    private translate: TranslateService
  ) {

  }


  particlesLoaded(container: Container): void {
  }
  //Change this to false to see the loadi
  isLoaded: boolean = false;


  //#region  Delete
  // initCustomCursor() {
  //   const cursor = document.getElementById('customCursor');

  //   document.addEventListener('mousemove', (e) => {
  //     if (cursor) {
  //       console.log(e);
  //       cursor.style.left = `${e.pageX}px`;
  //       cursor.style.top = `${e.pageY}px`;
  //       cursor.classList.add('visible');
  //     }
  //   });

  //   document.addEventListener('mouseenter', () => {
  //     if (cursor) {
  //       cursor.style.opacity = '1';
  //     }
  //   });

  //   document.addEventListener('mouseleave', () => {
  //     if (cursor) {
  //       cursor.classList.remove('visible');
  //       cursor.style.opacity = '0';
  //     }
  //   });
  // }

  async ngOnInit() {

    inject();
    injectSpeedInsights();
    const lang = await this.getLanguage();
    this.translate.use(lang);
    AOS.init({
        duration: 1500,
        once: false
      });
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }

  ngAfterViewInit() {

  }

  async getLanguage () {
    const lang = localStorage.getItem('lang');
    if ( lang ) {
      return lang
    } else{
      this.translate.setDefaultLang('es');
      const browserLang = this.translate.getBrowserLang();
      localStorage.setItem('lang', browserLang || 'es');
      return browserLang?.match(/en|es/) ? browserLang : 'es';
    }

  }


  title = 'portfolio';
}
