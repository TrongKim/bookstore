import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    protected readonly $auth_state = new Subject<boolean>();
    public readonly auth_state$ = this.$auth_state.asObservable();
    authValidate(state: boolean): void {
        this.$auth_state.next(state);
    }
}