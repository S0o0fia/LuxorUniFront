import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWelfareDepartmentComponent } from './employee-welfare-department.component';

describe('EmployeeWelfareDepartmentComponent', () => {
  let component: EmployeeWelfareDepartmentComponent;
  let fixture: ComponentFixture<EmployeeWelfareDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWelfareDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWelfareDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
