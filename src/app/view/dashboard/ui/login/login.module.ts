import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { InputPhoneDirective } from "src/app/directive/phone-input.directive";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputPhoneDirective
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {} 