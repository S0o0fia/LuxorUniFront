import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCComponent } from './calendar-c.component';

describe('CalendarCComponent', () => {
  let component: CalendarCComponent;
  let fixture: ComponentFixture<CalendarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
