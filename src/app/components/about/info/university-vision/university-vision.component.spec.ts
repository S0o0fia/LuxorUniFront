import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityVisionComponent } from './university-vision.component';

describe('UniversityVisionComponent', () => {
  let component: UniversityVisionComponent;
  let fixture: ComponentFixture<UniversityVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
