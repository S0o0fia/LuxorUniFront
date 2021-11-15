import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentServicesComponent } from './current-services.component';

describe('CurrentServicesComponent', () => {
  let component: CurrentServicesComponent;
  let fixture: ComponentFixture<CurrentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
