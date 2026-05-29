import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../utils/content.constants';

interface ArchLayer { layer: string; color: string; items: string[]; }

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  highlights?: string[];
  screenshots?: Array<{ src: string; label: string }>;
  architecture?: ArchLayer[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS as Project[];

  getGalleryPreview(project: Project) {
    return project.screenshots?.slice(0, 8) ?? [];
  }
}
