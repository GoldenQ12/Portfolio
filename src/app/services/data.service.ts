import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/Menu';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getNavBar(){
    return this.http.get<any[]>('/assets/data/menus.json');
  }

  getTranslations(lang: string): Observable<{[key: string]: string}> {
    return this.http.get<any>('/assets/data/translations.json').pipe(
      map(data => {
        const translations = data[lang][0];
        return translations;
      })
    );
  }

  changeLanguage(lang: string) {
    this.currentLanguage.next(lang);
  }


}
