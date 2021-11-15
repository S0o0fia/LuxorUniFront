import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacingCoronaComponent } from './facing-corona.component';

describe('FacingCoronaComponent', () => {
  let component: FacingCoronaComponent;
  let fixture: ComponentFixture<FacingCoronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacingCoronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacingCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
