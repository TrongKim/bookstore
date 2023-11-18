import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}