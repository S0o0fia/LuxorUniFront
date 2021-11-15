import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPresidentComponent } from './university-president.component';

describe('UniversityPresidentComponent', () => {
  let component: UniversityPresidentComponent;
  let fixture: ComponentFixture<UniversityPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPresidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
