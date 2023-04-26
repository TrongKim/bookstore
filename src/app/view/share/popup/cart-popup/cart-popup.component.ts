import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent implements OnInit {
  @Output() e_close_popup = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  clickEventClosePopup(): void {
    this.e_close_popup.emit(true);
  }

}
