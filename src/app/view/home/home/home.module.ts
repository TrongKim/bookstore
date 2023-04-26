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
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
})
export class HomeModule { }