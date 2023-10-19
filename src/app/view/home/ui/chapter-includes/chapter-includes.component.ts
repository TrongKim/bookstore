import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-chapter-includes',
  templateUrl: './chapter-includes.component.html',
  styleUrls: ['./chapter-includes.component.scss']
})
export class ChapterIncludesComponent implements OnInit {
  @ViewChild('title_chapter_element', { static: false })
    title_chapter_element_ref: ElementRef | null = null;
  @ViewChild('chapter_list_element', { static: false })
    chapter_list_element_ref: ElementRef | null = null;
  @ViewChild('button_free_trail_element', { static: false })
    button_free_trail_element_ref: ElementRef | null = null;
  @ViewChild('question_element', { static: false })
    question_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_chapter_element_ref) return;
    const title_chapter_element = this.title_chapter_element_ref.nativeElement as HTMLElement;
    if (title_chapter_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      this.animationForTitle(title_chapter_element);
      this.animationForChapterList();
      this.animationForButton();
      this.animationForQuestion();
    }

  }

  animationForTitle(title_chapter_element: HTMLElement): void {
    title_chapter_element.children[0].classList.add('active');
    // animation for line bottom of title author about
    setTimeout(() => {
      title_chapter_element.children[1].classList.add('active');
    }, 500);
  }

  animationForChapterList(): void {
    if (!this.chapter_list_element_ref) return;
    const chapter_list_element = this.chapter_list_element_ref.nativeElement as HTMLElement;
    let count = 0;
    let countElement = 0;
    while (count < chapter_list_element.children.length) {
      setTimeout(() => {
        chapter_list_element.children[countElement].classList.add('active');
        countElement++;
      }, 900 + (count * 350));
      count++;
    }
  }

  animationForButton(): void {
    if (!this.button_free_trail_element_ref) return;
    const button_free_trail_element = this.button_free_trail_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      button_free_trail_element.classList.add('active');
    }, 2000);
  }

  animationForQuestion(): void {
    if (!this.question_element_ref) return;
    const question_element = this.question_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      question_element.classList.add('active');
    }, 2450);
  }

}
