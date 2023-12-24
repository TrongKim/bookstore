import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { StoreAPIService } from "src/app/api/client/store.api";
import { IBook } from "src/app/model/book.model";

@Injectable()
export class TopProductService {
    constructor(protected sas: StoreAPIService) {}

    getAllProduct(): Observable<IBook[]> {
        return this.sas.getAll().pipe(map(data => data.data));
    }
}