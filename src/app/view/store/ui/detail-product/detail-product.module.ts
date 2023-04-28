import { NgModule } from '@angular/core';
import { DetailProductComponent } from './detail-product.component';
import { RouterModule } from '@angular/router';
import { IncentivesComponent } from '../incentives/incentives.component';

@NgModule({
    declarations: [
        DetailProductComponent,
        IncentivesComponent
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