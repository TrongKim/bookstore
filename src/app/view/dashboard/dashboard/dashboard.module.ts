import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { TopNavModule } from "../ui/top-nav/top-nav.module";
import { SidebarModule } from "../ui/sidebar/sidebar.module";
import { LastCustomerModule } from "../ui/last-customer/last-customer.module";
import { TopProductModule } from "../ui/top-product/top-product.module";
import { TransactionsModule } from "../ui/transactions/transactions.module";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LoginModule } from "../ui/login/login.module";
import { ProductListModule } from "../ui/product-list/product-list.module";

@NgModule({
    imports: [
        CommonModule,
        TopNavModule,
        SidebarModule,
        LastCustomerModule,
        TopProductModule,
        TransactionsModule,
        LoginModule,
        ProductListModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ]),
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyAooZh-qEMELz3_5HHx5LhClA8arNdLpGw",
            authDomain: "bookstore-b8a65.firebaseapp.com",
            projectId: "bookstore-b8a65",
            storageBucket: "bookstore-b8a65.appspot.com",
            messagingSenderId: "122474874973",
            appId: "1:122474874973:web:d986ae1a0c68d77731a5b4",
            measurementId: "G-68809G1BPV"
        }),
        AngularFireStorageModule
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent
    ],
})
export class DashboardModule { }