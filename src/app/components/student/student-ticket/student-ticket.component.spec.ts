import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTicketComponent } from './student-ticket.component';

describe('StudentTicketComponent', () => {
  let component: StudentTicketComponent;
  let fixture: ComponentFixture<StudentTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
