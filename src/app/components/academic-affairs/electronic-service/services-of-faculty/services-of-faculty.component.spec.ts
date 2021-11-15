import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfFacultyComponent } from './services-of-faculty.component';

describe('ServicesOfFacultyComponent', () => {
  let component: ServicesOfFacultyComponent;
  let fixture: ComponentFixture<ServicesOfFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesOfFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
