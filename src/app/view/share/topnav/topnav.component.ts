import { Component, OnInit } from '@angular/core';
import { AlertDynamicService } from '../alert-dynamic/alert-dynamic.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { SubSink } from 'subsink';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { IBookInCartCookie } from 'src/app/model/book.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(protected router: Router, protected as: AuthService, protected ads: AlertDynamicService) { }

  isShowCartPopup: boolean = false;
  isShowLoginPopup: boolean = false;
  isActiveMenuResponsive: boolean = false;
  isLoginSuccess: boolean = false;

  numberProductInCart: number = 0;

  protected subs: SubSink = new SubSink();

  ngOnInit(): void {
    this.isLoginSuccess = CookieUtils.getCookie('auth') === 'login success';
    this.subs.add(this.as.auth_state$.subscribe(auth => this.isLoginSuccess = auth));
    this.numberProductInCart = this.getIdsBook().length;

    this.subs.add(this.ads.cart_add$.subscribe(() => {
      this.numberProductInCart +=1;
    }));
  }

  protected getIdsBook(): string[] {
    let ids = [];
    for(let book of this.getBookInCart()) {
      ids.push(book.id);
    }
    return ids;
  }

  protected getBookInCart(): IBookInCartCookie[] {
    const bookInCookie = CookieUtils.getCookieProductInCart();
    return bookInCookie.trim().length > 0 ? JSON.parse(bookInCookie) as IBookInCartCookie[] : [];
  }

  clickEventActiveMenuResponsive(): void {
    this.isActiveMenuResponsive = true;
  }

  clickEventShowLoginPopup(): void {
    this.isShowLoginPopup = true;
  }

  clickEventShowCartPopup(): void {
    this.isShowCartPopup = true;
  }

  clickEventCloseMenuResponsive(): void {
    this.isActiveMenuResponsive = false;
  }
}
