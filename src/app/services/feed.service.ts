import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { FeedResponse } from '../FeedResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'http://localhost:8080/api/v1/feed'

  constructor(private http: HttpClient) { };

  getFeed(): Observable<FeedResponse> {
    const token = localStorage.getItem('token');
    return this.http.get<FeedResponse>(this.apiUrl, this.createHttpOptions(token!));
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

