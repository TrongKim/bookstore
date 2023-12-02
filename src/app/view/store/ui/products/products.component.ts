import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { IBook } from 'src/app/model/book.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(protected ps: ProductService) { }

  books: IBook[] = [];

  protected subs = new SubSink();

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    window.scrollTo(0, 0);
  }

  getBooks(): void {
    this.subs.add(this.ps.getAllBook().subscribe(books => this.books = books));
  }

}
