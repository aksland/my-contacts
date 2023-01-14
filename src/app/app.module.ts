import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, LogLevel, OidcSecurityService } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environments';

@NgModule({  
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule.forRoot({
      config: {
        authority: environment.authority,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: environment.client_id,
        scope: environment.scope,
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        silentRenewUrl: `${window.location.origin}/silent-renew.html`,
        logLevel: LogLevel.Debug,
      },
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
