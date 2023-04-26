import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from '../../share/header/header.module';
import { FooterModule } from '../../share/footer/footer.module';
import { ReadFreeChapterModule } from '../../share/read-free-chapter/read-free-chapter.module';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";
import { ReviewTwoBookModule } from '../../share/review-two-book/review-two-book.module';
import { TrademarkModule } from '../../share/trademark/trademark.module';

@NgModule({
    imports: [
        HeaderModule,
        ReviewTwoBookModule,
        ReadFreeChapterModule,
        TrademarkModule,
        FooterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: AboutComponent
            }
        ])
    ],
    declarations: [
        AboutComponent
    ],
    exports: [
        AboutComponent
    ],
})
export class AboutModule { }