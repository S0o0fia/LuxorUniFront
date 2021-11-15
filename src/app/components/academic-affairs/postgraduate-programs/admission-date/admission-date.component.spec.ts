import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDateComponent } from './admission-date.component';

describe('AdmissionDateComponent', () => {
  let component: AdmissionDateComponent;
  let fixture: ComponentFixture<AdmissionDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
