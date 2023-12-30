import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { AuthService } from './auth.service';
import { AlertDynamicService } from '../alert-dynamic/alert-dynamic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Output() e_close_popup = new EventEmitter<boolean>();

  constructor(protected ls: LoginService, protected as: AuthService, protected ads: AlertDynamicService) {}

  login_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required]))
  });

  register_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    username: new FormControl('', Validators.compose([Validators.required])),
    password: new FormControl('', Validators.compose([Validators.required])),
    confirm_password: new FormControl('', Validators.compose([Validators.required]))
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
      if (!response) {
        this.ads.alert({
          title: 'LOGIN FAIL',
          message: 'Email or password wrong',
          state: 'error'
        });
        return;
      }
      CookieUtils.setCookie('auth', 'login success', new Date(2099, 0, 0).toUTCString());
      this.ads.alert({
        title: 'LOGIN SUCCESS',
        message: 'Happy shopping',
        state: 'success'
      });
      this.as.authValidate(true);
      this.e_close_popup.emit(true);
    });
  }

  clickEventRegister(): void {
    if (!this.register_form.valid) return;
    if (this.register_form.value.confirm_password !== this.register_form.value.password) {
      this.ads.alert({
        title: 'REGISTER FAIL',
        message: 'Confirm password not same with password',
        state: 'error'
      });
      return;
    }
    this.ls.register(this.register_form.value.email || '', this.register_form.value.password || '', this.register_form.value.username || '').subscribe(response => {
      if (!response) {
        this.ads.alert({
          title: 'REGISTER FAIL',
          message: 'Email is exists',
          state: 'error'
        });
        return;
      }
      this.as.authValidate(true);
      CookieUtils.setCookie('auth', 'login success', new Date(2099, 0, 0).toUTCString());
      this.ads.alert({
        title: 'REGISTER SUCCESS',
        message: 'Happy shopping',
        state: 'success'
      });
      this.e_close_popup.emit(true);
    });
  }
  
}
