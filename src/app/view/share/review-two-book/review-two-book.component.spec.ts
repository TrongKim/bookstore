import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTwoBookComponent } from './review-two-book.component';

describe('ReviewTwoBookComponent', () => {
  let component: ReviewTwoBookComponent;
  let fixture: ComponentFixture<ReviewTwoBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTwoBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTwoBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
