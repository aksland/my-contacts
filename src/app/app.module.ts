import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, LogLevel, OidcSecurityService } from 'angular-auth-oidc-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environments';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularResourcesComponent } from './components/angular-resources/angular-resources.component';
import { SoftrigResourcesComponent } from './components/softrig-resources/softrig-resources.component';

@NgModule({  
  declarations: [
    AppComponent,
    NavbarComponent,
    AngularResourcesComponent,
    SoftrigResourcesComponent
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
