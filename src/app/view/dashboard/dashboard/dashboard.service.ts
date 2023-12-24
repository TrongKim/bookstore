import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DashBoardService {
    
    protected readonly $isChangePageProduct = new BehaviorSubject<'product' | 'home'>('home');
    public readonly isChangePageProduct$ = this.$isChangePageProduct.asObservable();

    changePageProduct(state: 'product' | 'home'): void {
        this.$isChangePageProduct.next(state);
    }

}