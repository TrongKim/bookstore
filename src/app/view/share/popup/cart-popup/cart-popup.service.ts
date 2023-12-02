import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { StoreAPIService } from "src/app/api/client/store.api";
import { IBook } from "src/app/model/book.model";

@Injectable()
export class CartPopupService {
    constructor(protected sas: StoreAPIService) {}

    getBooksByIds(ids: string[]): Observable<IBook[]> {
        return this.sas.getBooksByIds(ids).pipe(map(result => result.data));
    }
}