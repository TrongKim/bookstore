import { Injectable } from "@angular/core";
import { Observable, Subject, map, take } from "rxjs";
import { AuthApiService } from "src/app/api/client/auth.api";

@Injectable()
export class LoginService {
    constructor(protected aps: AuthApiService) {}

    login(email: string, password: string): Observable<boolean> {
        return this.aps.login(email, password).pipe(take(1)).pipe(map(data => {
            return data.status === 200;
        }));
    }

    register(email: string, password: string, username: string): Observable<boolean> {
        return this.aps.register(email, password, username).pipe(take(1)).pipe(map(data => {
            return data.status === 200;
        }));
    }
}