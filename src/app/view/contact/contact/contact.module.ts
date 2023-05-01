import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from '../../share/header/header.module';
import { FooterModule } from '../../share/footer/footer.module';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { FrequentQuestionsComponent } from "../ui/frequent-questions/frequent-questions.component";
import { KeepInTouchComponent } from "../ui/keep-in-touch/keep-in-touch.component";


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
        ContactComponent,
        FrequentQuestionsComponent,
        KeepInTouchComponent
    ],
    exports: [
        ContactComponent
    ],
})
export class ContactModule { }