import { NgModule } from '@angular/core';
import { CartPopupComponent } from './cart-popup.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CartPopupComponent
    ],
    exports: [
        CartPopupComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CartPopupModule { }