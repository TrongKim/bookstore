import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @ViewChild('title_element', { static: false })
    title_element_ref: ElementRef | null = null;
  @ViewChild('image_element', { static: false })
    image_element_ref: ElementRef | null = null;
  @ViewChild('description_element', { static: false })
    description_element_ref: ElementRef | null = null;
  @ViewChild('awards_element', { static: false })
    awards_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  
  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_element_ref) return;
    const title_element = this.title_element_ref.nativeElement as HTMLElement;
    if (title_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      this.animationForTitle(title_element);
      this.animationForDescription();
      this.animationForAwards();
    } 
  }

  animationForTitle(title_element: HTMLElement): void {
    title_element.children[0].classList.add('active');

    setTimeout(() => {
      title_element.children[1].classList.add('active');
    }, 250);
  }

  animationForDescription(): void {
    if (!this.description_element_ref) return;
    const element = this.description_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      element.classList.add('active');
    }, 500);
  }

  animationForAwards(): void {
    if (!this.awards_element_ref) return;
    const element = this.awards_element_ref.nativeElement as HTMLElement;

    let count = 0;
    let countAnimation = 0;
    while (count < element.children.length) {
      setTimeout(() => {
        element.children[countAnimation].classList.add('active');
        countAnimation++;
      }, 750 + (250 * count));
      count++;
    }
  }

}
