import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityGoalsComponent } from './university-goals.component';

describe('UniversityGoalsComponent', () => {
  let component: UniversityGoalsComponent;
  let fixture: ComponentFixture<UniversityGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
