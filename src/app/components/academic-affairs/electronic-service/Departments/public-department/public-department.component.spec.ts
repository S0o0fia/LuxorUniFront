import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDepartmentComponent } from './public-department.component';

describe('PublicDepartmentComponent', () => {
  let component: PublicDepartmentComponent;
  let fixture: ComponentFixture<PublicDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
