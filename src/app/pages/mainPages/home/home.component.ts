import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit    {


  translations: {[key: string]: string} = {};

  constructor ( private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.currentLanguage$.subscribe(lang => {
      this.dataService.getTranslations(lang).subscribe(translations => {
        this.translations = translations;
      });
    });
  }

}
