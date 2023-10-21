import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-what-reader-say',
  templateUrl: './what-reader-say.component.html',
  styleUrls: ['./what-reader-say.component.scss']
})
export class WhatReaderSayComponent implements OnInit {
  @ViewChild('title_element', { static: false })
    title_element_ref: ElementRef | null = null;
  @ViewChild('description_element', { static: false })
    description_element_ref: ElementRef | null = null;
  @ViewChild('rating_element', { static: false })
    rating_element_ref: ElementRef | null = null;
  @ViewChild('card_left_element', { static: false })
    card_left_element_ref: ElementRef | null = null;
  @ViewChild('card_right_element', { static: false })
  card_right_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_element_ref) return;
    const title_element = this.title_element_ref.nativeElement as HTMLElement;
    if (title_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      this.animationForTitle(title_element);
      this.animationForDescription();
      this.animationForRating();
      this.animationForCardLeft();
      this.animationForCardRight();
    }
  }

  animationForTitle(title_element: HTMLElement): void {
    title_element.children[0].classList.add('active');

    setTimeout(() => {
      title_element.children[1].classList.add('active');
    }, 500);
  }

  animationForDescription(): void {
    if (!this.description_element_ref) return;
    const description_element = this.description_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      description_element.classList.add('active');
    }, 700);
  }

  animationForRating(): void {
    if (!this.rating_element_ref) return;
    const rating_element = this.rating_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      rating_element.classList.add('active');
    }, 1050);
  }

  animationForCardLeft(): void {
    if (!this.card_left_element_ref) return;
    const card_left_element = this.card_left_element_ref.nativeElement as HTMLElement;
    let count = 0;
    while (count < card_left_element.children.length) {
      const element = card_left_element.children[count];
      setTimeout(() => {
        element.classList.add('active');
        let countChild = 0;
        let countAnimation = 0;
        while (countChild < element.children.length) {
          setTimeout(() => {
            element.children[countAnimation].classList.add('active');
            countAnimation++;
          }, 350 + (countChild * 250));
          countChild++;
        }
      }, 1250 + (count * 1000));
      count++;
    }
  }

  animationForCardRight(): void {
    if (!this.card_right_element_ref) return;
    const card_right_element = this.card_right_element_ref.nativeElement as HTMLElement;
    let count = 0;
    while (count < card_right_element.children.length) {
      const element = card_right_element.children[count];
      setTimeout(() => {
        element.classList.add('active');
        let countChild = 0;
        let countAnimation = 0;
        while (countChild < element.children.length) {
          setTimeout(() => {
            element.children[countAnimation].classList.add('active');
            countAnimation++;
          }, 350 + (countChild * 350));
          countChild++;
        }
      }, 2000 + 1250 + (count * 1000)); //  1500 get time from animation card left
      count++;
    }
  }

}
