import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Output() e_close_popup = new EventEmitter<boolean>();

  constructor(protected ls: LoginService, protected as: AuthService) {}

  login_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(8)]))
  });

  register_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    username: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(8)])),
    confirm_password: new FormControl('', Validators.compose([Validators.minLength(8)]))
  });

  isLoginForm: boolean = true;

  ngOnInit(): void {
  }

  clickEventClosePopup(): void {
    this.e_close_popup.emit(true);
  }

  clickEventShowLoginForm(): void {
    this.isLoginForm = true;
  }

  clickEventShowRegisterForm(): void {
    this.isLoginForm = false;
  }

  clickEventLogin(): void {
    if (!this.login_form.valid) return;
    this.ls.login(this.login_form.value.email || '', this.login_form.value.password || '').subscribe(response => {
      if (!response) return;
      CookieUtils.setCookie('auth', 'login success', new Date(2099, 0, 0).toUTCString());
      this.as.authValidate(true);
      this.e_close_popup.emit(true);
    });
  }

  clickEventRegister(): void {
    if (!this.register_form.valid) return;
    if (this.register_form.value.confirm_password !== this.register_form.value.password) return;
    this.ls.register(this.register_form.value.email || '', this.register_form.value.password || '', this.register_form.value.username || '').subscribe(response => {
      if (!response) {
        return;
      }
      this.as.authValidate(true);
      CookieUtils.setCookie('auth', 'login success', new Date(1999, 0, 0).toUTCString());
      this.e_close_popup.emit(true);
    });
  }
  
}
