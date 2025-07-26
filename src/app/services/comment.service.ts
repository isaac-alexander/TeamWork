import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { CommentResponse } from '../CommentResponse';
import { commentInterface } from '../commentInterface';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
}
@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private apiUrl = `http://localhost:8080/api/v1/articles`

    constructor(private http: HttpClient) { };

    postComment(data: commentInterface, id: number): Observable<CommentResponse> {
        const user = localStorage.getItem('user')
        const userObject = JSON.parse(user!);
        const token = userObject.token;
        const header = this.createHttpOptions(token!);
        const url = `${this.apiUrl}/${id}/comment`;
        const result = this.http.post<CommentResponse>(url, data, header);
        return result;
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
