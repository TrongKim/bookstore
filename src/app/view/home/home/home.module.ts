import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterModule } from '../../share/footer/footer.module';
import { ReadFreeChapterModule } from '../../share/read-free-chapter/read-free-chapter.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { IconAuthorModule } from 'src/app/icon/icon-author/icon-author.module';
import { IconQrModule } from 'src/app/icon/icon-qr/icon-qr.module';
import { TrademarkModule } from '../../share/trademark/trademark.module';
import { ReviewTwoBookModule } from '../../share/review-two-book/review-two-book.module';
import { ReviewNewBookComponent } from "../ui/review-new-book/review-new-book.component";
import { AboutAuthorComponent } from "../ui/about-author/about-author.component";
import { OrderNowComponent } from "../ui/order-now/order-now.component";
import { WhatLearnComponent } from "../ui/what-learn/what-learn.component";
import { ChapterIncludesComponent } from "../ui/chapter-includes/chapter-includes.component";


@NgModule({
    imports: [
        IconAuthorModule,
        IconQrModule,
        CommonModule,
        FooterModule,
        TrademarkModule,
        ReviewTwoBookModule,
        ReadFreeChapterModule,
        RouterModule.forChild([
            {
              path: '',
              component: HomeComponent
            },
        ])
    ],
    declarations: [
        HomeComponent,
        ReviewNewBookComponent,
        AboutAuthorComponent,
        OrderNowComponent,
        WhatLearnComponent,
        ChapterIncludesComponent
    ],
    exports: [
        HomeComponent
    ],
})
export class HomeModule { }