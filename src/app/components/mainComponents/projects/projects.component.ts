import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'main-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  translations: {[key: string]: string} = {};

  constructor (
    private dataService: DataService,
  ) {}

  ngOnInit(): void {

  }
}
