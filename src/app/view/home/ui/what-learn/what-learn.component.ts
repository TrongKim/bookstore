import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-what-learn',
  templateUrl: './what-learn.component.html',
  styleUrls: ['./what-learn.component.scss']
})
export class WhatLearnComponent implements OnInit {
  @ViewChild('title_learn_element', { static: false })
    title_learn_element_ref: ElementRef | null = null;
  @ViewChild('list_item_can_learn_element', { static: false })
    list_item_can_learn_element_ref: ElementRef | null = null;
  @ViewChild('image_container_element', { static: false })
    image_container_element_ref: ElementRef | null = null;
  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_learn_element_ref) return;
    const title_learn_element = this.title_learn_element_ref.nativeElement as HTMLElement;
    if (title_learn_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      this.animationForTitle(title_learn_element);
      this.animationForListItemCanLearn();
      this.animationForImage();
    }
  }

  animationForTitle(title_learn_element: HTMLElement): void {
    title_learn_element.children[0].classList.add('active');
    setTimeout(() => {
      title_learn_element.children[1].classList.add('active');
    }, 500);
  }

  animationForListItemCanLearn(): void {
    if (!this.list_item_can_learn_element_ref) return;
    const list_item_can_learn_element = this.list_item_can_learn_element_ref.nativeElement as HTMLElement;
    let count = 0;
    let countElement = 0;
    while (count < list_item_can_learn_element.children.length) {
      setTimeout(() => {
        list_item_can_learn_element.children[countElement].classList.add('active');
        countElement++;
      }, 900 + (count * 350));
      count++;
    }
  }

  animationForImage(): void {
    if (!this.image_container_element_ref) return;
    const image_container_element = this.image_container_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      image_container_element.classList.add('active');
    }, 2350);
  }
}
