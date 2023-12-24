import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { AuthService } from 'src/app/view/share/login/auth.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-review-new-book',
  templateUrl: './review-new-book.component.html',
  styleUrls: ['./review-new-book.component.scss']
})
export class ReviewNewBookComponent implements OnInit {
  @ViewChild('welcome_to_page_element', { static: false }) welcome_to_page_element_ref: ElementRef | null = null;
  @ViewChild('title_and_description_website_element', { static: false }) title_and_description_website_element_ref: ElementRef | null = null;
  @ViewChild('buttons_order_read_detail_element', { static: false }) buttons_order_read_detail_element_ref: ElementRef | null = null;
  @ViewChild('parameter_element', { static: false }) parameter_element_ref: ElementRef | null = null;
  @ViewChild('image_book_container_element', { static: false }) image_book_container_element_ref: ElementRef | null = null;
  @ViewChild('menu_top_navbar_element', { static: false }) menu_top_navbar_element_ref: ElementRef | null = null;
  
  isActiveMenuResponsive: boolean = false;
  isShowLoginPopup: boolean = false;
  isShowCartPopup: boolean = false;
  isLoginSuccess: boolean = false;

  protected subs: SubSink = new SubSink();
  constructor(protected router: Router, protected as: AuthService) {}

  ngOnInit(): void {
    this.isLoginSuccess = CookieUtils.getCookie('auth') === 'login success';
    this.subs.add(this.as.auth_state$.subscribe(auth => this.isLoginSuccess = auth));
  }

  ngAfterViewInit(): void {
    this.handleUIMenuTopNavBar();
    this.handleEventLoadWebToActiveAnimation();
    this.handleEventLoadWebToActiveAnimationBook();
  }

  ngOnDestroy(): void {
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

  handleEventLoadWebToActiveAnimation(): void {
    if (!this.welcome_to_page_element_ref || !this.title_and_description_website_element_ref) return;
    if(!this.buttons_order_read_detail_element_ref || !this.parameter_element_ref) return;
    const welcome_to_page_element = this.welcome_to_page_element_ref.nativeElement as HTMLElement;
    const title_and_description_website_element = this.title_and_description_website_element_ref.nativeElement as HTMLElement;
    const buttons_order_read_detail_element = this.buttons_order_read_detail_element_ref.nativeElement as HTMLElement;
    const parameter_element = this.parameter_element_ref.nativeElement as HTMLElement;
    const elements: HTMLElement[] = [welcome_to_page_element, title_and_description_website_element, buttons_order_read_detail_element, parameter_element];
    let count = 1;
    for(let element of elements) {
      setTimeout(() => {
        element.classList.add('active');
      }, count * 300);
      count++;
    }
  }

  handleEventLoadWebToActiveAnimationBook(): void {
    if(!this.image_book_container_element_ref) return;
    const image_book_container_element = this.image_book_container_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      image_book_container_element.classList.add('active');
    }, 200);
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

  clickEventActiveMenuResponsive(): void {
    this.isActiveMenuResponsive = true;
  }

  clickEventCloseMenuResponsive(): void {
    this.isActiveMenuResponsive = false;
  }
  
}
