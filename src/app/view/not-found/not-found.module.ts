import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../share/header/header.module";
import { FooterModule } from "../share/footer/footer.module";
import { NotFoundComponent } from "./not-found.component";


@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: NotFoundComponent
            }
        ])
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        NotFoundComponent
    ],
})
export class NotFoundModule { }