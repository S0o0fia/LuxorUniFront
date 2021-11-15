import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentOfInsuranceAndPensionsComponent } from './department-of-insurance-and-pensions.component';

describe('DepartmentOfInsuranceAndPensionsComponent', () => {
  let component: DepartmentOfInsuranceAndPensionsComponent;
  let fixture: ComponentFixture<DepartmentOfInsuranceAndPensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentOfInsuranceAndPensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentOfInsuranceAndPensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
