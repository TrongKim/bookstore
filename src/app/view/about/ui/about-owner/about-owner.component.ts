import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-about-owner',
  templateUrl: './about-owner.component.html',
  styleUrls: ['./about-owner.component.scss']
})
export class AboutOwnerComponent implements OnInit {
  @ViewChild('image_owner_element', { static: false })
    image_owner_element_ref: ElementRef | null = null;
  @ViewChild('container_left_element', { static: false })
    container_left_element_ref: ElementRef | null = null;
  @ViewChild('container_right_element', { static: false })
    container_right_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.image_owner_element_ref) return;
    const image_owner_element = this.image_owner_element_ref.nativeElement as HTMLElement;

    if (image_owner_element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      image_owner_element.classList.add('active');
      this.animationForContainerLeft();
      this.animationForContainerRight();
    }
  }

  animationForContainerLeft(): void {
    if (!this.container_left_element_ref) return;
    const element = this.container_left_element_ref.nativeElement as HTMLElement;
    setTimeout(() => {
      element.classList.add('active');
    }, 250);
  }

  animationForContainerRight(): void {
    if (!this.container_right_element_ref) return;
    const element = this.container_right_element_ref.nativeElement as HTMLElement;
    let count = 0;
    let countAnimation = 0;
    while (count < element.children.length) {
      if (count === 0) {
        element.children[0].children[0].classList.add('active');
        setTimeout(() => {
          element.children[0].children[1].classList.add('active');
        }, 250);
        count++;
        countAnimation++;
        continue;
      }
      setTimeout(() => {
        element.children[countAnimation].classList.add('active');
        countAnimation++;
      }, 250 + (count * 250));
      count++;
    }
  }

}
