import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_SECTIONS, TIMELINE } from '../../utils/content.constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  sections = ABOUT_SECTIONS;
  timeline = TIMELINE;
  years = 4;
}
