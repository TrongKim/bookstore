import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFreeChapterComponent } from './read-free-chapter.component';

describe('ReadFreeChapterComponent', () => {
  let component: ReadFreeChapterComponent;
  let fixture: ComponentFixture<ReadFreeChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFreeChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadFreeChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
