import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { environment } from '../environments/environments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private contactsService: ContactsService,
    private oidcSecurityService: OidcSecurityService
  ){}
  
  private errorMessage = '';
  contacts: Contact[] = [];

  title = 'My contacts';
  isAuth : boolean = false;
  isConfigOk : boolean = false;



  ngOnInit() {
    if(environment.client_id.length > 10){
      this.isConfigOk = true;
    }
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }): void => {
      if(isAuthenticated){
        this.isAuth = true;
        this.getContacts();
      } 
    });
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

  getContacts() {
    this.oidcSecurityService.getAccessToken().subscribe((token: string): void => {
      this.contactsService.getContacts(token).subscribe({
        next: contacts => {
          this.contacts = contacts;
        },
        error: err => {
          this.errorMessage = err;
        }
      });
    });
  }
}
