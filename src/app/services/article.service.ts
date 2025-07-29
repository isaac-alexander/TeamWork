import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ArticleResponse } from '../ArticleResponse';
import { articleInterface } from '../articleInterface';
import { newArticleInterface } from '../newArticleInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:8080/api/v1/articles'

  constructor(private http: HttpClient) { };

  postArticle(data: newArticleInterface): Observable<ArticleResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const header = this.createHttpOptions(token!);
    const result = this.http.post<ArticleResponse>(this.apiUrl, data, header);
    return result;
    //return new response(Url, data, token)
    //calling http.post method with 3 params(apiUrl, data, createHttpOptions(token!)) and returns what comes from the call
  }

  getArticlesById(id: Number): Observable<ArticleResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const headers = this.createHttpOptions(token!);
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ArticleResponse>(url, headers);
  }

  deleteArticle(id: number) {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const header = this.createHttpOptions(token!);
    const url = `${this.apiUrl}/${id}`;
    const result = this.http.delete<ArticleResponse>(url, header);
    return result;
  }

  updateArticle(data: articleInterface): Observable<ArticleResponse> {
    const user = localStorage.getItem('user')
    const userObject = JSON.parse(user!);
    const token = userObject.token;
    const header = this.createHttpOptions(token!);
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<ArticleResponse>(url, data, header);
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
