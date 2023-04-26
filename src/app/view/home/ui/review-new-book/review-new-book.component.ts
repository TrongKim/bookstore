import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-new-book',
  templateUrl: './review-new-book.component.html',
  styleUrls: ['./review-new-book.component.scss']
})
export class ReviewNewBookComponent implements OnInit {

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

}
