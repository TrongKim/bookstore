import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDynamicComponent } from './alert-dynamic.component';

describe('AlertDynamicComponent', () => {
  let component: AlertDynamicComponent;
  let fixture: ComponentFixture<AlertDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
