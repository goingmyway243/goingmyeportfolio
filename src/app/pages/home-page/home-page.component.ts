import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  socialUser?: SocialUser;

  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
    });
  }

  loginWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }
}
