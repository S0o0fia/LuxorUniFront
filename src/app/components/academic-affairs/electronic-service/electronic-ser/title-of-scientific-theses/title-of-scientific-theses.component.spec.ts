import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfScientificThesesComponent } from './title-of-scientific-theses.component';

describe('TitleOfScientificThesesComponent', () => {
  let component: TitleOfScientificThesesComponent;
  let fixture: ComponentFixture<TitleOfScientificThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleOfScientificThesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleOfScientificThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
