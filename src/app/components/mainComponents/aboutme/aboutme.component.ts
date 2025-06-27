import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'main-aboutme',
  standalone: false,
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css',
})
export class AboutmeComponent implements OnInit {


  translations: {[key: string]: string} = {};

  constructor (
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService.currentLanguage$.subscribe(lang => {
      this.dataService.getTranslations(lang).subscribe(translations => {
        this.translations = translations;
      });
    });
  }
}
