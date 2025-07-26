import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { GifResponse } from '../GifResponse';
import { gifInterface } from '../gifInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GifService {
  private apiUrl = 'http://localhost:8080/api/v1/gifs'

  constructor(private http: HttpClient) { };

  postGif(data: gifInterface): Observable<GifResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const header = this.createHttpOptions(token!);
    const result = this.http.post<GifResponse>(this.apiUrl, data, header);
    return result;
    //return new response(Url, data, token)
    //calling http.post method with 3 params(apiUrl, data, createHttpOptions(token!)) and returns what comes from the call
  }

  updateArticle(data: gifInterface): Observable<GifResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const header = this.createHttpOptions(token!);
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<GifResponse>(url, data, header);
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
