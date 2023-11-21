import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class UploadAPIService {
    constructor(protected http: HttpClient) {}

    uploadImage(): Observable<any> {
        const reqHeader = new HttpHeaders({
            'Authorization': ``
        });
        
        return this.http.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable", {}, { 
            headers: { 'Content-Type': 'application/'}
        })
    }
}