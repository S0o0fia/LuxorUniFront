import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgraduateProgramComponent } from './postgraduate-program.component';

describe('PostgraduateProgramComponent', () => {
  let component: PostgraduateProgramComponent;
  let fixture: ComponentFixture<PostgraduateProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgraduateProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgraduateProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
