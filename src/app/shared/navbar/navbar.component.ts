import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  id: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrollProgress = 0;
  activeSection = 'home';

  menuOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Architecture', id: 'architecture' },
    { label: 'Experience', id: 'experience' },
    { label: 'Beyond Code', id: 'beyond' },
    { label: 'Contact', id: 'contact' }
  ];

  sectionColors: Record<string, string> = {
    home: 'linear-gradient(90deg, #00ffaa, #00e0ff)',
    projects: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    architecture: 'linear-gradient(90deg, #f59e0b, #ef4444)',
    experience: 'linear-gradient(90deg, #22c55e, #14b8a6)',
    beyond: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    contact: 'linear-gradient(90deg, #3b82f6, #06b6d4)'
  };

  currentGradient = this.sectionColors['home'];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {

    this.updateScrollProgress();

    const scrollPosition = window.scrollY + 120;

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeSection = item.id;
          this.currentGradient = this.sectionColors[this.activeSection] || this.sectionColors['home'];
        }
      }
    }
  }

  updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}