import { NgModule } from "@angular/core";
import { StoreComponent } from "./store.component";
import { RouterModule } from "@angular/router";
import { HeaderModule } from '../../share/header/header.module';
import { FooterModule } from '../../share/footer/footer.module';
import { ReadFreeChapterModule } from '../../share/read-free-chapter/read-free-chapter.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        ReadFreeChapterModule,
        CommonModule,
        RouterModule.forChild([
            {
              path: 'products',
              component: StoreComponent,
              loadChildren: () => import('../ui/products/products.module').then(m => m.ProductsModule)
            },
            {
              path: 'detail-product',
              component: StoreComponent,
              loadChildren: () => import('../ui/detail-product/detail-product.module').then(m => m.DetailProductModule)
            },
            {
              path: '',
              redirectTo: 'products',
              pathMatch: 'full'
            }
          ])
    ],
    declarations: [
        StoreComponent
    ],
    exports: [
        StoreComponent
    ],
})
export class StoreModule { }