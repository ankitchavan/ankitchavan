import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'VUCEM Platform',
      description:
        'Scaled a micro frontend platform using Nx Monorepo and Module Federation with shared UI libraries.',
      tags: ['Angular 18+', 'Nx', 'Module Federation']
    },
    {
      title: 'Angular Migration',
      description:
        'Migrated AngularJS to Angular with NgRx architecture and improved performance for data-heavy UI.',
      tags: ['AngularJS → Angular', 'NgRx', 'AG Grid']
    },
    {
      title: 'Enterprise UI Library',
      description:
        'Built reusable design system components published as internal npm packages across multiple apps.',
      tags: ['Angular 8–16', 'SCSS', 'Design System']
    }
  ];
}