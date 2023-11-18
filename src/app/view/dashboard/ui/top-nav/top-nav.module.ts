import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopNavComponent } from "./top-nav.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TopNavComponent
    ],
    exports: [
        TopNavComponent
    ]
})
export class TopNavModule {};