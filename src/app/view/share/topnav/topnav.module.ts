import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TopnavComponent } from "./topnav.component";
import { CartPopupModule } from "../popup/cart-popup/cart-popup.module";
import { LoginModule } from "../login/login.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CartPopupModule,
        LoginModule,
    ],
    declarations: [
        TopnavComponent
    ],
    exports: [
        TopnavComponent
    ]
})
export class TopNavClientModule {}