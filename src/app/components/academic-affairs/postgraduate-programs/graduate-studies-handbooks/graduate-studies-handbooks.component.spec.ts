import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateStudiesHandbooksComponent } from './graduate-studies-handbooks.component';

describe('GraduateStudiesHandbooksComponent', () => {
  let component: GraduateStudiesHandbooksComponent;
  let fixture: ComponentFixture<GraduateStudiesHandbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateStudiesHandbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateStudiesHandbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
