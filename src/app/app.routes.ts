import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
  },
  { path: 'hero', redirectTo: '', pathMatch: 'full' },
  { path: 'about', redirectTo: '', pathMatch: 'full' },
  { path: 'projects', redirectTo: '', pathMatch: 'full' },
  { path: 'skills', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
