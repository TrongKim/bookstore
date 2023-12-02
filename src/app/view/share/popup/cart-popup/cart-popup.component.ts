import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBook, IBookInCartCookie } from 'src/app/model/book.model';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { CartPopupService } from './cart-popup.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss'],
  providers: [CartPopupService]
})
export class CartPopupComponent implements OnInit {
  @Output() e_close_popup = new EventEmitter<boolean>();

  books: (IBook & { total?: number })[] = [];

  protected subs = new SubSink();

  constructor(protected cps: CartPopupService) {}

  ngOnInit(): void {
    this.subs.add(this.cps.getBooksByIds(this.getIdsBook()).subscribe(books => {
      let raw_books: (IBook & { total?: number })[] = [];
      books.forEach(raw_book => {
        for (let bookInCart of this.getBookInCart()) {
          if (bookInCart.id === raw_book.id) {
            raw_books.push({ ...raw_book, total: bookInCart.total });
          }
        }
      });
      this.books = raw_books;
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
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

  getTotalPrice(): number {
    let total = 0;
    for(let book of this.books) {
      total += book.price * (book.total || 0);
    }

    return total;
  }

  clickEventClosePopup(): void {
    this.e_close_popup.emit(true);
  }

  clickEventRemoveBook(id: string): void {
    this.books = this.books.filter(book => book.id !== id);
    let booksInCart = this.getBookInCart();
    CookieUtils.setCookieProductToCart(JSON.stringify(booksInCart.filter(book => book.id !== id)), new Date(2099, 0 ,0).toUTCString());
    if (this.books.length === 0) this.e_close_popup.emit(true);
  }

}
