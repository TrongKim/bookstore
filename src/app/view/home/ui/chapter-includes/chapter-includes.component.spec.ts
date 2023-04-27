import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIncludesComponent } from './chapter-includes.component';

describe('ChapterIncludesComponent', () => {
  let component: ChapterIncludesComponent;
  let fixture: ComponentFixture<ChapterIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIncludesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
