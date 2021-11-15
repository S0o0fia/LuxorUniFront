import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelServicesComponent } from './personnel-services.component';

describe('PersonnelServicesComponent', () => {
  let component: PersonnelServicesComponent;
  let fixture: ComponentFixture<PersonnelServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
