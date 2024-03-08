import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard2TopnavComponent } from './dashboard2-topnav.component';

describe('Dashboard2TopnavComponent', () => {
  let component: Dashboard2TopnavComponent;
  let fixture: ComponentFixture<Dashboard2TopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard2TopnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard2TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
