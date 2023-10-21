import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-articles-and-resources',
  templateUrl: './articles-and-resources.component.html',
  styleUrls: ['./articles-and-resources.component.scss']
})
export class ArticlesAndResourcesComponent implements OnInit {
  @ViewChild('title_element', { static: false })
    title_element_ref: ElementRef | null = null;
  @ViewChild('articles_resources_element', { static: false })
    articles_resources_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_element_ref) return;
    const title_element = this.title_element_ref.nativeElement as HTMLElement;
    if (title_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      this.animationForTitle(title_element);
      this.animationForCard();
    }
  }

  animationForTitle(title_element: HTMLElement): void {
    title_element.children[0].classList.add('active');

    setTimeout(() => {
      title_element.children[1].classList.add('active');
    }, 500);
  }

  animationForCard(): void {
    if (!this.articles_resources_element_ref) return;
    const articles_resources_element = this.articles_resources_element_ref.nativeElement as HTMLElement;
    let count = 0;
    let countAnimation = 0;
    while (count < articles_resources_element.children.length) {
      setTimeout(() => {
        articles_resources_element.children[countAnimation].classList.add('active');
        countAnimation++;
      }, 850 + (count * 350));
      count++;
    }
  }

}
