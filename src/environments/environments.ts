// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    SIGNALR_PUSHHUB_URL: 'https://test-signal.softrig.com/pushHub',
    base_url: 'https://test.softrig.com/api',
    authority: 'https://test-login.softrig.com',
    client_id: '',
    redirect_uri: 'http://localhost:4200',
    post_logout_redirect_uri: 'http://localhost:4200',
    silent_redirect_uri: 'http://localhost:4200/silent-renew.html',
    automaticSilentRenew: true,
    response_type: 'code',
    scope: 'openid profile AppFramework',
    loadUserInfo: false,
    filterProtocolClaims: true, // prevents protocol level claims such as nbf, iss, at_hash, and nonce from being extracted from the identity token as profile dataloadUserInfo: true
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
  