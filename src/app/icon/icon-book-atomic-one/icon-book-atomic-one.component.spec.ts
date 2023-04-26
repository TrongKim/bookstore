import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBookAtomicOneComponent } from './icon-book-atomic-one.component';

describe('IconBookAtomicOneComponent', () => {
  let component: IconBookAtomicOneComponent;
  let fixture: ComponentFixture<IconBookAtomicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBookAtomicOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBookAtomicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
