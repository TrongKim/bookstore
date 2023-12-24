import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { IUser } from "src/app/model/auth.model";
import { IHttpResponse } from "src/app/model/dynamic.model";

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    constructor(protected http: HttpClient) { }

    getAllUser(admin_id: string): Observable<IHttpResponse<IUser[]>> {
        console.log(admin_id);
        return this.http.post<IHttpResponse<IUser[]>>("http://localhost:3000/auth/get-all", {
            admin_id
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}