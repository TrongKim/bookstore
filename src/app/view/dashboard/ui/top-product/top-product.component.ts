import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  products = [
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
    {
      product_name: 'Restaurant Booking App',
      framework: 'React & Bootstrap Framework',
      sales: 70,
    },
  ];

  ngOnInit(): void {
  }

}
