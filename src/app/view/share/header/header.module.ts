import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CartPopupModule } from '../popup/cart-popup/cart-popup.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CartPopupModule,
        CommonModule,
        RouterModule
    ]
})
export class HeaderModule { }