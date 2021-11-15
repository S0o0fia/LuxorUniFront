import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShop1Component } from './work-shop1.component';

describe('WorkShop1Component', () => {
  let component: WorkShop1Component;
  let fixture: ComponentFixture<WorkShop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShop1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
