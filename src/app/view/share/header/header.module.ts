import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CartPopupModule } from '../popup/cart-popup/cart-popup.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { TopNavClientModule } from '../topnav/topnav.module';

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
        RouterModule,
        LoginModule,
        TopNavClientModule
    ]
})
export class HeaderModule { }