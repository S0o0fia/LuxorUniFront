import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicDeliveryComponent } from './electronic-delivery.component';

describe('ElectronicDeliveryComponent', () => {
  let component: ElectronicDeliveryComponent;
  let fixture: ComponentFixture<ElectronicDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
