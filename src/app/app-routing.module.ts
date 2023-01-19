import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosplayPageComponent } from './pages/cosplay-page/cosplay-page.component';
import { DanceCoverPageComponent } from './pages/dancecover-page/dancecover-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProjectPageComponent } from './pages/myproject-page/myproject-page.component';
import { WotageiPageComponent } from './pages/wotagei-page/wotagei-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cosplay', component: CosplayPageComponent },
  { path: 'wotagei', component: WotageiPageComponent },
  { path: 'dancecover', component: DanceCoverPageComponent },
  { path: 'myprojects', component: MyProjectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
