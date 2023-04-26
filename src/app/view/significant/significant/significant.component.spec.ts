import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignificantComponent } from './significant.component';

describe('SignificantComponent', () => {
  let component: SignificantComponent;
  let fixture: ComponentFixture<SignificantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignificantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignificantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
