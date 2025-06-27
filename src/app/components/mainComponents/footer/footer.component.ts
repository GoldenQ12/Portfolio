import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'main-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  submitForm() {
    const formData = new FormData();
    formData.append('name', (document.querySelector('[name="name"]') as HTMLInputElement)?.value);
    formData.append('email', (document.querySelector('[name="email"]') as HTMLInputElement)?.value);
    formData.append('message', (document.querySelector('[name="message"]') as HTMLTextAreaElement)?.value);

    this.http.post('https://formbackend.com/f/YOUR_FORM_ID', formData).subscribe({
      next: () => {
        // Silent success (no UI feedback)
        (document.querySelector('form') as HTMLFormElement).reset();
      },
      error: (err) => {
        // Silent failure (or log for debugging)
        console.error('Submission failed', err);
      }
    });
  }

  translations: {[key: string]: string} = {};

  constructor (
    private dataService: DataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

}
