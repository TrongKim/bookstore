import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopProductComponent } from "./top-product.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TopProductComponent
    ],
    exports: [
        TopProductComponent
    ]
})
export class TopProductModule {};