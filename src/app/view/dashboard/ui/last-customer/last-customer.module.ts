import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LastCustomerComponent } from "./last-customer.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LastCustomerComponent
    ],
    exports: [
        LastCustomerComponent
    ]
})
export class LastCustomerModule {};