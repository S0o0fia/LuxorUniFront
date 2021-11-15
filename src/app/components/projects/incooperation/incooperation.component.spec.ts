import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INcooperationComponent } from './incooperation.component';

describe('INcooperationComponent', () => {
  let component: INcooperationComponent;
  let fixture: ComponentFixture<INcooperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INcooperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INcooperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
