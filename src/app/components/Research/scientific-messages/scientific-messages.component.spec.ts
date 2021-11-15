import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificMessagesComponent } from './scientific-messages.component';

describe('ScientificMessagesComponent', () => {
  let component: ScientificMessagesComponent;
  let fixture: ComponentFixture<ScientificMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
