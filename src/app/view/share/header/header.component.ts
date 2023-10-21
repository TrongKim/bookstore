import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  isActiveMenuResponsive: boolean = false;

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.handleUIMenuTopNavBar();
    this.handleUITitle();
    this.handleUIDescription();
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

  clickEventShowCartPopup(): void {
    this.isShowCartPopup = true;
  }

  clickEventCloseCartPopup(): void {
    this.isShowCartPopup = false;
  }

}
