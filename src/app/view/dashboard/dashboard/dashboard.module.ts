import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { TopNavModule } from "../ui/top-nav/top-nav.module";
import { SidebarModule } from "../ui/sidebar/sidebar.module";
import { LastCustomerModule } from "../ui/last-customer/last-customer.module";
import { TopProductModule } from "../ui/top-product/top-product.module";
import { TransactionsModule } from "../ui/transactions/transactions.module";


@NgModule({
    imports: [
        CommonModule,
        TopNavModule,
        SidebarModule,
        LastCustomerModule,
        TopProductModule,
        TransactionsModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ])
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent
    ],
})
export class DashboardModule { }