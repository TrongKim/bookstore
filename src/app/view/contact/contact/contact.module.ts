import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from '../../share/header/header.module';
import { FooterModule } from '../../share/footer/footer.module';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";


@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ContactComponent
            }
        ])
    ],
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ],
})
export class ContactModule { }