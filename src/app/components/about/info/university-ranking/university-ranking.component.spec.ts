import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRankingComponent } from './university-ranking.component';

describe('UniversityRankingComponent', () => {
  let component: UniversityRankingComponent;
  let fixture: ComponentFixture<UniversityRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
