import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificAwardsComponent } from './scientific-awards.component';

describe('ScientificAwardsComponent', () => {
  let component: ScientificAwardsComponent;
  let fixture: ComponentFixture<ScientificAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificAwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
