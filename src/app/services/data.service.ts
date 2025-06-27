import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/Menu';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    private http: HttpClient,
  ) { }

  getNavBar(){
    return this.http.get<any[]>('/assets/data/menus.json');
  }


}
