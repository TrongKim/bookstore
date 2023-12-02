import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.scss']
})
export class AboutAuthorComponent implements OnInit {
  @ViewChild('image_author_element', { static: false })
    image_author_element_ref: ElementRef | null = null;
  @ViewChild('title_author_element', { static: false })
    title_author_element_ref: ElementRef | null = null;
  @ViewChild('container_about_author_element', { static: false })
  container_about_author_element_ref: ElementRef | null = null;
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}
  
  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.image_author_element_ref || !this.title_author_element_ref) return;
    if (!this.container_about_author_element_ref) return;
    const image_author_element = this.image_author_element_ref.nativeElement as HTMLElement;
    const title_author_element = this.title_author_element_ref.nativeElement as HTMLElement;
    const container_about_author_element = this.container_about_author_element_ref.nativeElement as HTMLElement;
    if (image_author_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      image_author_element.classList.add('active');
      title_author_element.children[0].classList.add('active');
      //animation for line bottom of title author about
      setTimeout(() => {
        title_author_element.children[1].classList.add('active');
      }, 500);
      //animation for description
      const _element_animations_list = [container_about_author_element.children[1], container_about_author_element.children[2], container_about_author_element.children[3]];
      let count = 1;
      for(let element of _element_animations_list) {
        setTimeout(() => {
          element.classList.add('active');
        }, 500 + (350 * count));
        count++;
      }
    }
  }

}
