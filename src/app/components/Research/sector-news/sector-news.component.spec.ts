import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorNewsComponent } from './sector-news.component';

describe('SectorNewsComponent', () => {
  let component: SectorNewsComponent;
  let fixture: ComponentFixture<SectorNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
