import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent implements OnInit {
  @ViewChild('title_order_element', { static: false })
    title_order_element_ref: ElementRef | null = null;
  @ViewChild('paragraph_order_element', { static: false })
    paragraph_order_element_ref: ElementRef | null = null;
  @ViewChild('button_order_element', { static: false })
    button_order_element_ref: ElementRef | null = null;
  @ViewChild('image_container_element', { static: false })
    image_container_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }
  
  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.title_order_element_ref || !this.paragraph_order_element_ref || !this.button_order_element_ref) return;
    if (!this.image_container_element_ref) return;
    const title_order_element = this.title_order_element_ref.nativeElement as HTMLElement;
    if (title_order_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      title_order_element.children[0].classList.add('active');
      setTimeout(() => {
        title_order_element.children[1].classList.add('active');
      }, 500);
      const elements = [
        this.paragraph_order_element_ref.nativeElement as HTMLElement,
        this.button_order_element_ref.nativeElement as HTMLElement
      ];
      const image_container_element = this.image_container_element_ref.nativeElement as HTMLElement;
      let count = 0;
      for(let element of elements) {
        setTimeout(() => { 
          element.classList.add('active');
        }, 700 + (count * 250));
        count++;
      }
      setTimeout(() => {
        image_container_element.classList.add('active');
      }, 1400);

    }
  }

}
