import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAndResourcesComponent } from './articles-and-resources.component';

describe('ArticlesAndResourcesComponent', () => {
  let component: ArticlesAndResourcesComponent;
  let fixture: ComponentFixture<ArticlesAndResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAndResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesAndResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
