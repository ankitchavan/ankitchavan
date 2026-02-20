import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'ankit.11ch@gmail.com';
  linkedin = 'https://linkedin.com/in/ankitchavan';
  resumeLink = 'assets/Ankit_Chavan_Resume.pdf';
}