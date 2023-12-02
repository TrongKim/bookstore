import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBook } from "src/app/model/book.model";
import { IHttpResponse } from "src/app/model/dynamic.model";

@Injectable({
    providedIn: 'root'
})
export class StoreAPIService {
    constructor(protected http: HttpClient) {}

    protected reqHeader = new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    });

    getAll(): Observable<IHttpResponse<IBook[]>> {
        return this.http.get<IHttpResponse<IBook[]>>('http://localhost:3000/product/get-all');
    }

    getDetailBook(bookId: string): Observable<IHttpResponse<IBook>> {
        return this.http.get<IHttpResponse<IBook>>(`http://localhost:3000/product/get-one?query=${bookId}`);
    }

    getBooksByIds(bookIds: string[]): Observable<IHttpResponse<IBook[]>> {
        return this.http.post<IHttpResponse<IBook[]>>('http://localhost:3000/product/get-by-ids', {
            ids_product: bookIds
        }, { headers: this.reqHeader });
    }
    
}