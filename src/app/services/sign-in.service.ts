import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { SignInResponse } from '../SignInResponse';
import { SignInUser } from '../SignInUser';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/signin'

  constructor(private http: HttpClient) { };

  signIn(data: SignInUser): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(this.apiUrl, data, httpOptions);
  }
}

