import { NgModule } from "@angular/core";
import { ReadFreeChapterModule } from "src/app/view/share/read-free-chapter/read-free-chapter.module";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ProductsComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        ReadFreeChapterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProductsComponent
            }
        ])
    ]
})
export class ProductsModule { }