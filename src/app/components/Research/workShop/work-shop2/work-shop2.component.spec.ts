import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShop2Component } from './work-shop2.component';

describe('WorkShop2Component', () => {
  let component: WorkShop2Component;
  let fixture: ComponentFixture<WorkShop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShop2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
