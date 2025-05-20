import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'main-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


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
