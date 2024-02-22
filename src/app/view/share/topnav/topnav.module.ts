import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TopnavComponent } from "./topnav.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TopnavComponent
    ],
    exports: [
        TopnavComponent
    ]
})
export class TopNavClientModule {}