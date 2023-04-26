import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconQrComponent } from './icon-qr.component';

describe('IconQrComponent', () => {
  let component: IconQrComponent;
  let fixture: ComponentFixture<IconQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
