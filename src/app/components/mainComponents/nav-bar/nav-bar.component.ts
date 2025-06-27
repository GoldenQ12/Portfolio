import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Menu } from '../../../interfaces/Menu';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit  {

  menus: Menu[] = [];
  selectedTab: string = '';
  menuIsOpen: boolean = true;

  id = "tsparticles";

  translations: {[key: string]: string} = {};


  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
  constructor (
    private dataService: DataService,
    public translate: TranslateService
  ) {
    const savedLang = localStorage.getItem('lang') || 'en';
      translate.setDefaultLang('en');
      translate.use(savedLang);
  }


  async ngOnInit()  {
    this.dataService.getNavBar()
      .subscribe( (data: any) => {
        this.menus = data;
      });
    this.changeLanguage('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }



}
