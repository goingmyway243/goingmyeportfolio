import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
})
export class DefaultLayoutComponent implements AfterViewInit, OnDestroy {
  activeSection = signal('hero');

  readonly sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  private revealObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit() {
    // Section visibility observer for dot nav
    this.sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    this.sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver?.observe(el);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const sectionHosts = this.elementRef.nativeElement.querySelectorAll('.main-content > *');
    this.revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    sectionHosts.forEach(host => {
      host.classList.add('reveal-init');
      this.revealObserver?.observe(host);
    });
  }

  ngOnDestroy() {
    this.revealObserver?.disconnect();
    this.sectionObserver?.disconnect();
  }
}
