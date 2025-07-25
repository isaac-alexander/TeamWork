import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { CreateUser } from '../CreateUser';
import { CreateUserResponse } from '../CreateUserResponse';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/create-user'

  constructor(private http: HttpClient) { };

  createUser(data: CreateUser): Observable<CreateUserResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    return this.http.post<CreateUserResponse>(this.apiUrl, data, this.createHttpOptions(token));
  }

  createHttpOptions(token: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      })
    }
  }
}
