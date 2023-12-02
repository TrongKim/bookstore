import { NgModule } from '@angular/core';
import { DetailProductComponent } from './detail-product.component';
import { RouterModule } from '@angular/router';
import { IncentivesComponent } from '../incentives/incentives.component';
import { CommonModule } from '@angular/common';
import { NumberValidateDirective } from 'src/app/directive/number-validate.directive';

@NgModule({
    declarations: [
        DetailProductComponent,
        IncentivesComponent
    ],
    exports: [
        DetailProductComponent
    ],
    imports: [
        CommonModule,
        NumberValidateDirective,
        RouterModule.forChild([
            {
                path: '',
                component: DetailProductComponent
            }
        ])
    ]
})
export class DetailProductModule { }