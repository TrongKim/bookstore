import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../share/header/header.module";
import { FooterModule } from "../share/footer/footer.module";
import { LicensesComponent } from "./licenses.component";


@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: LicensesComponent
            }
        ])
    ],
    declarations: [
        LicensesComponent
    ],
    exports: [
        LicensesComponent
    ],
})
export class LicensesModule { }