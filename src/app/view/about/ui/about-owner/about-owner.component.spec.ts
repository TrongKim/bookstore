import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOwnerComponent } from './about-owner.component';

describe('AboutOwnerComponent', () => {
  let component: AboutOwnerComponent;
  let fixture: ComponentFixture<AboutOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
