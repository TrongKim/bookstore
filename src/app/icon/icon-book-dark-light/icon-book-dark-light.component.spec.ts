import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBookDarkLightComponent } from './icon-book-dark-light.component';

describe('IconBookDarkLightComponent', () => {
  let component: IconBookDarkLightComponent;
  let fixture: ComponentFixture<IconBookDarkLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBookDarkLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBookDarkLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
