import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalScientificPublishingComponent } from './international-scientific-publishing.component';

describe('InternationalScientificPublishingComponent', () => {
  let component: InternationalScientificPublishingComponent;
  let fixture: ComponentFixture<InternationalScientificPublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalScientificPublishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalScientificPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
