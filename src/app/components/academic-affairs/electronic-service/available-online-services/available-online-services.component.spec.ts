import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOnlineServicesComponent } from './available-online-services.component';

describe('AvailableOnlineServicesComponent', () => {
  let component: AvailableOnlineServicesComponent;
  let fixture: ComponentFixture<AvailableOnlineServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableOnlineServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableOnlineServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
