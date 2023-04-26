import { NgModule } from '@angular/core';
import { DetailProductComponent } from './detail-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DetailProductComponent
    ],
    exports: [
        DetailProductComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DetailProductComponent
            }
        ])
    ]
})
export class DetailProductModule { }