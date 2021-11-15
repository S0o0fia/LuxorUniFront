import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMasterOrPhDThesisComponent } from './best-master-or-ph-d-thesis.component';

describe('BestMasterOrPhDThesisComponent', () => {
  let component: BestMasterOrPhDThesisComponent;
  let fixture: ComponentFixture<BestMasterOrPhDThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMasterOrPhDThesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMasterOrPhDThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
