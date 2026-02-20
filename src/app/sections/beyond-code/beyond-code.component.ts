import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PersonalItem {
  title: string;
  subtitle: string;
  icon: string;
}

@Component({
  selector: 'app-beyond-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beyond-code.component.html',
  styleUrls: ['./beyond-code.component.scss']
})
export class BeyondCodeComponent {
  items: PersonalItem[] = [
    {
      title: 'Velox',
      subtitle: 'Cricket Bat Brand',
      icon: 'assets/velox.png'
    },
    {
      title: 'Tasty Bites',
      subtitle: 'Food Business',
      icon: 'assets/food.png'
    },
    {
      title: '12k Steps',
      subtitle: 'Daily Fitness Journey',
      icon: 'assets/fitness.png'
    }
  ];
}