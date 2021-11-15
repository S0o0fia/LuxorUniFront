import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentOfSpecialStaffAffairsComponent } from './department-of-special-staff-affairs.component';

describe('DepartmentOfSpecialStaffAffairsComponent', () => {
  let component: DepartmentOfSpecialStaffAffairsComponent;
  let fixture: ComponentFixture<DepartmentOfSpecialStaffAffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentOfSpecialStaffAffairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentOfSpecialStaffAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
