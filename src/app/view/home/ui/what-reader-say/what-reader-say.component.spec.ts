import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatReaderSayComponent } from './what-reader-say.component';

describe('WhatReaderSayComponent', () => {
  let component: WhatReaderSayComponent;
  let fixture: ComponentFixture<WhatReaderSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatReaderSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatReaderSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
