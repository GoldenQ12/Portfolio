import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Menu } from '../../../interfaces/Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit  {

  menus: Menu[] = [];
  selectedTab: string = '';

  translations: {[key: string]: string} = {};



  constructor ( 
    private dataService: DataService,
  ) {}


  async ngOnInit()  {
    this.dataService.getNavBar()
      .subscribe( (data: any) => {
        this.menus = data;
      });
    this.changeLanguage('en');
  }

  changeLanguage( lang: string ) {
    this.dataService.getTranslations( lang )
      .subscribe( (data: any) => {
        this.translations = data;
      });
    this.dataService.changeLanguage( lang );
  }



}
