import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMessageComponent } from './university-message.component';

describe('UniversityMessageComponent', () => {
  let component: UniversityMessageComponent;
  let fixture: ComponentFixture<UniversityMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
