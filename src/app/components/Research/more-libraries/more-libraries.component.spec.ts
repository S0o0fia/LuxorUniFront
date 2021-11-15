import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLibrariesComponent } from './more-libraries.component';

describe('MoreLibrariesComponent', () => {
  let component: MoreLibrariesComponent;
  let fixture: ComponentFixture<MoreLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreLibrariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
