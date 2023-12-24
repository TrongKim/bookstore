import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserApiService } from "src/app/api/dashboard/user.api";

@Injectable()
export class LastCustomerService {
    constructor(protected uas: UserApiService) {}

    getAllUser(admin_id: string): Observable<any> {
        return this.uas.getAllUser(admin_id).pipe(map(data => {
            if(data.status === 200) {
                return data.data;
            } else {
                return [];
            }
        }));
    }

}