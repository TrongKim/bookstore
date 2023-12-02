import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { StoreAPIService } from "src/app/api/client/store.api";
import { IBook } from 'src/app/model/book.model';

@Injectable()
export class DetailProductService {
    constructor(protected sas: StoreAPIService) {}

    getBookDetail(id: string): Observable<IBook> {
        return this.sas.getDetailBook(id).pipe(map(result => result.data));
    }
}