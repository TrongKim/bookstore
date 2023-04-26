import { NgModule } from '@angular/core';
import { ReviewTwoBookComponent } from './review-two-book.component';
import { IconBookAtomicOneModule } from 'src/app/icon/icon-book-atomic-one/icon-book-atmoc-one.module';
import { IconBookDarkLightModule } from 'src/app/icon/icon-book-dark-light/icon-book-dark-light.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ReviewTwoBookComponent
    ],
    exports: [
        ReviewTwoBookComponent
    ],
    imports: [
        IconBookAtomicOneModule,
        IconBookDarkLightModule,
        CommonModule
    ]
})
export class ReviewTwoBookModule { }