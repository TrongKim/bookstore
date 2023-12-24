import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/model/auth.model";
import { IBook } from "src/app/model/book.model";
import { IHttpResponse } from "src/app/model/dynamic.model";

@Injectable({
    providedIn: 'root'
})
export class AuthAdminApiService {
    constructor(protected http: HttpClient) {}

    protected reqHeader = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    });

    login(email: string, password: string): Observable<IHttpResponse<IUser>> {
        const data = {
            email,
            password
        };
        return this.http.post<IHttpResponse<IUser>>('http://localhost:3000/admin/login', data, { headers: this.reqHeader });
    }

    register(email: string, password: string, username: string): Observable<IHttpResponse<IUser>> {
        const data = {
            username,
            email,
            password,
        };
        return this.http.post<IHttpResponse<IUser>>('http://localhost:3000/admin/register', data, { headers: this.reqHeader });
    }
    
}