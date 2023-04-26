import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAuthorComponent } from './icon-author.component';

describe('IconAuthorComponent', () => {
  let component: IconAuthorComponent;
  let fixture: ComponentFixture<IconAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
