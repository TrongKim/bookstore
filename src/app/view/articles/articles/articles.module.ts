import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterModule } from '../../share/footer/footer.module';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from "./articles.component";
import { HeaderModule } from "../../share/header/header.module";


@NgModule({
    imports: [
        CommonModule,
        FooterModule,
        HeaderModule,
        RouterModule.forChild([
            {
              path: '',
              component: ArticlesComponent
            },
        ])
    ],
    declarations: [
        ArticlesComponent
    ],
    exports: [
        ArticlesComponent
    ],
})
export class ArticlesModule { }