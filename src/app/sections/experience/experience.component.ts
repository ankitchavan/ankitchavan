import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'iLink Multitech Solutions',
      role: 'Technical Lead – Angular',
      duration: '2025 – Present',
      description:
        'Leading micro frontend architecture using Nx and Module Federation with a team of 10+ developers.'
    },
    {
      company: 'Rakuten Symphony',
      role: 'Senior Software Engineer – UI',
      duration: '2021 – 2025',
      description:
        'Built reusable UI libraries, handled Angular migrations, and implemented NgRx state management.'
    },
    {
      company: 'Visible Alpha',
      role: 'Software Developer – UI',
      duration: '2017 – 2021',
      description:
        'Developed data-heavy dashboards with AG Grid and Highcharts and migrated AngularJS to Angular.'
    },
    {
      company: 'Usense Pvt Ltd',
      role: 'UI Developer',
      duration: '2015 – 2017',
      description:
        'Built applications from scratch and created reusable CSS/UI libraries.'
    },
    {
      company: 'SDL Multilingual Solutions Pvt. Ltd',
      role: 'Localization Engineer',
      duration: '2014 – 2015',
      description:
        'Created PSD assets using Adobe Photoshop for multilingual content.'
    }
  ];
}