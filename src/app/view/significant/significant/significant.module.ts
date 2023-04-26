import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterModule } from '../../share/footer/footer.module';
import { ReadFreeChapterModule } from '../../share/read-free-chapter/read-free-chapter.module';
import { CommonModule } from '@angular/common';
import { SignificantComponent } from "./significant.component";
import { HeaderModule } from "../../share/header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FooterModule,
        HeaderModule,
        RouterModule.forChild([
            {
              path: '',
              component: SignificantComponent
            },
        ])
    ],
    declarations: [
        SignificantComponent
    ],
    exports: [
        SignificantComponent
    ],
})
export class SignificantModule { }