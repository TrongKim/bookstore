import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { SubSink } from 'subsink';
import { AuthService } from '../login/auth.service';
import { IBookInCartCookie } from 'src/app/model/book.model';
import { AlertDynamicService } from '../alert-dynamic/alert-dynamic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu_top_navbar_element', { static: false })
    menu_top_navbar_element_ref: ElementRef | null = null;
  @ViewChild('title_element', { static: false })
    title_element_ref: ElementRef | null = null;
  @ViewChild('description_element', { static: false })
  description_element_ref: ElementRef | null = null;
  @Input() titlePage: string = 'None Title Here';
  @Input() descriptionPage: string = 'Not have any description here'

  isShowCartPopup: boolean = false;
  isShowLoginPopup: boolean = false;
  isActiveMenuResponsive: boolean = false;
  isLoginSuccess: boolean = false;

  numberProductInCart: number = 0;

  protected subs: SubSink = new SubSink();

  constructor(protected router: Router, protected as: AuthService, protected ads: AlertDynamicService) { }

  ngOnInit(): void {
    this.isLoginSuccess = CookieUtils.getCookie('auth') === 'login success';
    this.subs.add(this.as.auth_state$.subscribe(auth => this.isLoginSuccess = auth));
    this.numberProductInCart = this.getIdsBook().length;

    this.subs.add(this.ads.cart_add$.subscribe(data => {
      this.numberProductInCart +=1;
    }));
  }

  ngAfterViewInit(): void {
    this.handleUIMenuTopNavBar();
    this.handleUITitle();
    this.handleUIDescription();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.unsubscribe();
  }

  handleUIMenuTopNavBar(): void {
    if (!this.menu_top_navbar_element_ref) return;
    const menu_top_navbar_element = this.menu_top_navbar_element_ref.nativeElement as HTMLUListElement;
    const url = this.router.url.split('/')[1];
    let count = 0;
    while (count < menu_top_navbar_element.children.length) {
      if (menu_top_navbar_element.children[count].textContent?.toLowerCase().includes(url)) {
        menu_top_navbar_element.children[count].classList.add('active');
      }
      count++;
    }
  }

  getIdsBook(): string[] {
    let ids = [];
    for(let book of this.getBookInCart()) {
      ids.push(book.id);
    }
    return ids;
  }

  getBookInCart(): IBookInCartCookie[] {
    const bookInCookie = CookieUtils.getCookieProductInCart();
    return bookInCookie.trim().length > 0 ? JSON.parse(bookInCookie) as IBookInCartCookie[] : [];
  }

  handleUITitle(): void {
    if (!this.title_element_ref) return;
    const title_element = this.title_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      title_element.children[0].classList.add('active');
    }, 0);
    setTimeout(() => {
      title_element.children[1].classList.add('active');
    }, 500);
  }

  handleUIDescription(): void {
    if (!this.description_element_ref) return;
    const description_element = this.description_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      description_element.classList.add('active');
    }, 750);
  }

  clickEventActiveMenuResponsive(): void {
    this.isActiveMenuResponsive = true;
  }

  clickEventCloseMenuResponsive(): void {
    this.isActiveMenuResponsive = false;
  }

  clickEventCloseLoginPopup(): void {
    this.isShowLoginPopup = false;
  }

  clickEventShowCartPopup(): void {
    this.isShowCartPopup = true;
  }
  clickEventShowLoginPopup(): void {
    this.isShowLoginPopup = true;
  }

  clickEventCloseCartPopup(): void {
    this.isShowCartPopup = false;
  }

}
