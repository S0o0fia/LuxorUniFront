import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificJournalsComponent } from './scientific-journals.component';

describe('ScientificJournalsComponent', () => {
  let component: ScientificJournalsComponent;
  let fixture: ComponentFixture<ScientificJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificJournalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
