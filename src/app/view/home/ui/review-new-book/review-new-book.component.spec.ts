import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNewBookComponent } from './review-new-book.component';

describe('ReviewNewBookComponent', () => {
  let component: ReviewNewBookComponent;
  let fixture: ComponentFixture<ReviewNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewNewBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
