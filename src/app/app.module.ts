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
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

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
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('713208026746-dd7qm2ur6mk8bnicjm5ksss6hrc7pii0.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1656960251429900')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
