import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskUniversityPresidentComponent } from './ask-university-president.component';

describe('AskUniversityPresidentComponent', () => {
  let component: AskUniversityPresidentComponent;
  let fixture: ComponentFixture<AskUniversityPresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskUniversityPresidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskUniversityPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
