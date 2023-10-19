import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu_top_navbar_element', { static: false }) menu_top_navbar_element_ref: ElementRef | null = null;
  @Input() titlePage: string = 'None Title Here';
  @Input() descriptionPage: string = 'Not have any description here'

  isShowCartPopup: boolean = false;
  isActiveMenuResponsive: boolean = false;

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.handleUIMenuTopNavBar();
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
