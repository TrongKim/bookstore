import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AlertDynamicService {

    protected readonly $alert = new Subject<{
        message: string;
        title: string;
        state: 'success' | 'error' | 'normal'
    }>();
    public readonly alert$ = this.$alert.asObservable();

    protected readonly $cart_add = new Subject<{
        id: string;
        total: number;
    }>();
    public readonly cart_add$ = this.$cart_add.asObservable();
    
    alert(data: { message: string; title: string; state: 'success' | 'error' | 'normal'}): void {
        this.$alert.next(data);
    }

    addCart(data: { id: string; total: number; }): void {
        this.$cart_add.next(data);
    }
}