import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompletedRequestComponent } from './admin-completed-request.component';

describe('AdminCompletedRequestComponent', () => {
  let component: AdminCompletedRequestComponent;
  let fixture: ComponentFixture<AdminCompletedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompletedRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompletedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
