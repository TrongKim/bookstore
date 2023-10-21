import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SPACE_TOP_TO_TRIGGER_ANIMATION } from 'src/app/enums/share/share.enums';

@Component({
  selector: 'app-read-free-chapter',
  templateUrl: './read-free-chapter.component.html',
  styleUrls: ['./read-free-chapter.component.scss']
})
export class ReadFreeChapterComponent implements OnInit {
  @ViewChild('read_free_chapter_container_element', { static: false })
    read_free_chapter_container_element_ref: ElementRef | null = null;

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  handleEventUserScrollIntoViewToLoadAnimation(): void {
    if (!this.read_free_chapter_container_element_ref) return;
    const element = this.read_free_chapter_container_element_ref.nativeElement as HTMLElement;
    if (element.getBoundingClientRect().top - SPACE_TOP_TO_TRIGGER_ANIMATION <= 0) {
      setTimeout(() => {
        element.classList.add('active');
      }, 250);
    }
  }

}
