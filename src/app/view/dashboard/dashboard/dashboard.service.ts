import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DashBoardService {
    
    protected readonly $isChangePageProduct = new Subject<'product' | 'home'>();
    public readonly isChangePageProduct$ = this.$isChangePageProduct.asObservable();

    changePageProduct(state: 'product' | 'home'): void {
        this.$isChangePageProduct.next(state);
    }

}