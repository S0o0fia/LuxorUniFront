import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityCheckComponent } from './integrity-check.component';

describe('IntegrityCheckComponent', () => {
  let component: IntegrityCheckComponent;
  let fixture: ComponentFixture<IntegrityCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrityCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
