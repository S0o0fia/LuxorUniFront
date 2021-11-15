import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateBylawsComponent } from './postgraduate-bylaws.component';

describe('PostgraduateBylawsComponent', () => {
  let component: PostgraduateBylawsComponent;
  let fixture: ComponentFixture<PostgraduateBylawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgraduateBylawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateBylawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
