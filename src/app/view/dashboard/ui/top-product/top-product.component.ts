import { Component, OnInit } from '@angular/core';
import { TopProductService } from './top-product.service';
import { IBook } from 'src/app/model/book.model';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss'],
  providers: [TopProductService]
})
export class TopProductComponent implements OnInit {

  constructor(protected tps: TopProductService) {}
  products: IBook[] = [];

  ngOnInit(): void {
    this.tps.getAllProduct().subscribe(books => this.products = books);
  }

}
