import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/content.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactInfo = CONTACT_INFO;
  socialLinks = SOCIAL_LINKS;
}
