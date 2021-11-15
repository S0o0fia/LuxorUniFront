import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStaffAffairsDepartmentComponent } from './general-staff-affairs-department.component';

describe('GeneralStaffAffairsDepartmentComponent', () => {
  let component: GeneralStaffAffairsDepartmentComponent;
  let fixture: ComponentFixture<GeneralStaffAffairsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralStaffAffairsDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStaffAffairsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
