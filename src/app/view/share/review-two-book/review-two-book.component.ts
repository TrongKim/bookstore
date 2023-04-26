import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-two-book',
  templateUrl: './review-two-book.component.html',
  styleUrls: ['./review-two-book.component.scss']
})
export class ReviewTwoBookComponent implements OnInit {
  @Input() backgroundColor: 'white' | 'blue' = 'white';
  constructor() { }

  ngOnInit(): void {
  }

}
