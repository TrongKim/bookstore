import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProductListComponent
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductListModule {};