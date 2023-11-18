import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TransactionsComponent,
    ],
    exports: [
        TransactionsComponent
    ]
})
export class TransactionsModule {};