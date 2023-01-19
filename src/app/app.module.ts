import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IconLinkComponent } from './components/icon-link/icon-link.component';
import { CardSimpleComponent } from './components/card-simple/card-simple.component';
import { WotageiPageComponent } from './pages/wotagei-page/wotagei-page.component';
import { CosplayPageComponent } from './pages/cosplay-page/cosplay-page.component';
import { DanceCoverPageComponent } from './pages/dancecover-page/dancecover-page.component';
import { MyProjectPageComponent } from './pages/myproject-page/myproject-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    IconLinkComponent,
    CardSimpleComponent,
    WotageiPageComponent,
    CosplayPageComponent,
    DanceCoverPageComponent,
    MyProjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
