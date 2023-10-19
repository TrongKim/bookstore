import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-review-two-book',
  templateUrl: './review-two-book.component.html',
  styleUrls: ['./review-two-book.component.scss']
})
export class ReviewTwoBookComponent implements OnInit {
  @ViewChild('title_section_author_book_element', { static: false}) 
    title_section_author_book_element_ref: ElementRef | null = null;
  @ViewChild('book_container_element', { static: false })
  book_container_element_ref: ElementRef | null = null;
  @Input() backgroundColor: 'white' | 'blue' = 'white';

  protected readonly $is_view_init = new Subject();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewLoadAnimation(): void {
    if (!this.title_section_author_book_element_ref || !this.book_container_element_ref) return;
    const title_section_author_book_element = this.title_section_author_book_element_ref.nativeElement as HTMLElement;
    const book_container_element = this.book_container_element_ref.nativeElement as HTMLElement;
    if (title_section_author_book_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      title_section_author_book_element.classList.add('active');
      let count = 0;
      let countAnimation = 0;
      while (count < book_container_element.children.length) {
        setTimeout(() => {
          book_container_element.children[countAnimation].classList.add('active');
          countAnimation++;
        }, (count + 1) * 400);
        count++;
      }
    }
  }

}
