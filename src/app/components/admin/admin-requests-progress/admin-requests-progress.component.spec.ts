import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestsProgressComponent } from './admin-requests-progress.component';

describe('AdminRequestsProgressComponent', () => {
  let component: AdminRequestsProgressComponent;
  let fixture: ComponentFixture<AdminRequestsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRequestsProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
