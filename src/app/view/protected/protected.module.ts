import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../share/header/header.module";
import { FooterModule } from "../share/footer/footer.module";
import { ProtectedComponent } from "./protected.component";


@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProtectedComponent
            }
        ])
    ],
    declarations: [
        ProtectedComponent
    ],
    exports: [
        ProtectedComponent
    ],
})
export class ProtectedModule { }