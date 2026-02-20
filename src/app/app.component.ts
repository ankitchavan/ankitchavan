import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ArchitectureComponent } from './sections/architecture/architecture.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { BeyondCodeComponent } from './sections/beyond-code/beyond-code.component';
import { ContactComponent } from './sections/contact/contact.component';
import { DividerComponent } from './shared/divider/divider.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    ArchitectureComponent,
    ExperienceComponent,
    BeyondCodeComponent,
    ContactComponent,
    DividerComponent,
    NavbarComponent
  ],
  template: `
     <div class="site">
      <div class="site__bg"></div>

      <app-navbar></app-navbar>
      
      <main class="site__container">
        <app-hero></app-hero>
        <app-divider></app-divider>

        <app-projects></app-projects>
        <app-divider></app-divider>

        <app-architecture></app-architecture>
        <app-divider></app-divider>

        <app-experience></app-experience>
        <app-divider></app-divider>

        <app-beyond-code></app-beyond-code>
        <app-divider></app-divider>

        <app-contact></app-contact>
      </main>
    </div>
  `
})
export class AppComponent {}