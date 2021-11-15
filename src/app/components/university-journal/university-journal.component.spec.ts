import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityJournalComponent } from './university-journal.component';

describe('UniversityJournalComponent', () => {
  let component: UniversityJournalComponent;
  let fixture: ComponentFixture<UniversityJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
