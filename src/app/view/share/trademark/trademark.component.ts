import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.scss']
})
export class TrademarkComponent implements OnInit {
  @ViewChild('title_element', { static: false })
    title_element_ref: ElementRef | null = null;
  @ViewChild('menu_trademark_element', { static: false })
    menu_trademark_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_element_ref || !this.menu_trademark_element_ref) return;
    const title_element = this.title_element_ref.nativeElement as HTMLElement;
    const menu_trademark_element = this.menu_trademark_element_ref.nativeElement as HTMLElement;
    if (title_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      title_element.children[0].classList.add('active');
      //animation for line bottom of title author about
      setTimeout(() => {
        title_element.children[1].classList.add('active');
      }, 500);
      let count = 0;
      while (count < menu_trademark_element.children.length) {
        const element = menu_trademark_element.children[count];
        setTimeout(() => {
          let countAnimationChild = 0;
          while (countAnimationChild < element.children.length) {
            const element_child = element.children[countAnimationChild];
            setTimeout(() => {
              element_child.classList.add('active');
            }, (countAnimationChild * 250));
            countAnimationChild++;
          }
        }, 500 + (count * 300));
        count++;
      }
    }
  }

}
