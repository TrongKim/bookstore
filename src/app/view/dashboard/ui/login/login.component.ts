import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { LoginAdminService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginAdminService]
})
export class LoginComponent implements OnInit {
  @Output() e_close_popup = new EventEmitter<boolean>();

  constructor(protected las: LoginAdminService) {}

  login_form = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  clickEventLogin(): void {
    if (!this.login_form.valid) return;
    this.las.login(this.login_form.value.email || '', this.login_form.value.password || '').subscribe(response => {
      if (!response.status) return;
      CookieUtils.setCookie('admin_id', response.data || '', new Date(2099, 0, 0).toUTCString());
      this.e_close_popup.emit(true);
    });
  }

}
