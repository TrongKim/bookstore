import { Injectable } from "@angular/core";
import { Observable, map, take } from "rxjs";
import { AuthAdminApiService } from "src/app/api/dashboard/auth.api";

@Injectable()
export class LoginAdminService {
    constructor(protected aaps: AuthAdminApiService) {}

    login(email: string, password: string): Observable<{status: boolean, data: null | string}> {
        return this.aaps.login(email, password).pipe(take(1)).pipe(map(data => {
            return {
                status: data.status === 200,
                data: data.data.id || null
            }
        }));
    }

    register(email: string, password: string, username: string): Observable<{status: boolean, data: null | string}> {
        return this.aaps.register(email, password, username).pipe(take(1)).pipe(map(data => {
            return {
                status: data.status === 200,
                data: data.data.id || null
            }
        }));
    }
}