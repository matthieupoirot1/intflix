import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.styl']
})
export class InscriptionPageComponent implements OnInit {

  public formLogin !: FormControl;
  public formPswd !: FormControl;
  public formEmail !: FormControl;
  public formBio !: FormControl;

  private backendURL = 'http://localhost:8200/inscription';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.formLogin = new FormControl('');
    this.formPswd = new FormControl('');
    this.formEmail = new FormControl('', [Validators.email]);
    this.formBio = new FormControl();

    this.formEmail.valueChanges.subscribe({
      next: (value) => {console.log(value); },
    });
  }

  onSubmit(): void{
    console.log('post request issued');
    this.http.post(this.backendURL, {login : this.formLogin.value, password: this.formPswd.value, email: this.formEmail.value}).pipe(
      catchError(this.handleError)
    ).subscribe((value) => {
      console.log(value);
    });
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
