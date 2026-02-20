import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Layer {
  name: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent {
  mfeApps = ['mfe-dashboard', 'mfe-orders', 'mfe-admin', 'mfe-reports'];
  layers = [
  {
    title: 'Shared Libraries',
    subtitle: 'UI Kit • Utils • Design Tokens',
    class: 'shared',
    badge: 'libs/shared',
    showArrow: true
  },
  {
    title: 'Core Platform (Shell)',
    subtitle: 'Auth • API • Global State • Layout • Guards',
    class: 'core',
    badge: 'NgRx • apps/shell',
    showArrow: true
  },
  {
    title: 'Feature Applications',
    subtitle: 'Domain-driven UI Modules • Lazy Loaded',
    class: 'feature',
    badge: 'libs/feature/*',
    showArrow: true
  },
  {
    title: 'Micro Frontends',
    subtitle: 'Module Federation • Independent Deployments',
    class: 'mfe',
    badge: 'apps/mfe/*',
    showArrow: false
  }
];
}