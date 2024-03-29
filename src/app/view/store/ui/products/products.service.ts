import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { StoreAPIService } from "src/app/api/client/store.api";
import { IBook } from "src/app/model/book.model";

@Injectable()
export class ProductService {
    constructor(protected sps: StoreAPIService) {}

    getAllBook(): Observable<IBook[]> {
        return this.sps.getAll().pipe(map(result => result.data));
    }

    searchBook(search: string): Observable<IBook[]> {
        return this.sps.searchBook(search).pipe(map(result => result.data));
    }
}