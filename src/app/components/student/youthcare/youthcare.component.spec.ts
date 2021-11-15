import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthcareComponent } from './youthcare.component';

describe('YouthcareComponent', () => {
  let component: YouthcareComponent;
  let fixture: ComponentFixture<YouthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
