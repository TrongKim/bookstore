import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titlePage: string = 'None Title Here';
  @Input() descriptionPage: string = 'Not have any description here'

  isShowCartPopup: boolean = false;
  isActiveMenuResponsive: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
