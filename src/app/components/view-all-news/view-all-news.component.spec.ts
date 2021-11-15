import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllNewsComponent } from './view-all-news.component';

describe('ViewAllNewsComponent', () => {
  let component: ViewAllNewsComponent;
  let fixture: ComponentFixture<ViewAllNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
