import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJournalComponent } from './search-journal.component';

describe('SearchJournalComponent', () => {
  let component: SearchJournalComponent;
  let fixture: ComponentFixture<SearchJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
