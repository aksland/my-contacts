import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environments';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private baseUrl = environment.base_url;
  private apiUrl = `${this.baseUrl}/biz/contacts?expand=Info,Info.InvoiceAddress,Info.DefaultPhone,Info.DefaultEmail,Info.DefaultAddress&hateoas=false&top=10`;
  constructor(
    private http: HttpClient,
  ) { }
  
  getContacts(token: string): Observable<Contact[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      };
      return this.http.get<Contact[]>(this.apiUrl, httpOptions).pipe(
        tap(data => console.log(`Contacts: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.status + ' ' + err.message;
    } else {
      errorMessage = err.status + ' ' + err.message;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
