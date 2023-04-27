import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatLearnComponent } from './what-learn.component';

describe('WhatLearnComponent', () => {
  let component: WhatLearnComponent;
  let fixture: ComponentFixture<WhatLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatLearnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
