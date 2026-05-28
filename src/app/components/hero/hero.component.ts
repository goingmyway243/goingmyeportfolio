import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/content.constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  personalInfo = PERSONAL_INFO;
  socialLinks = SOCIAL_LINKS;
}
