import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com5Component } from './com5.component';

describe('Com5Component', () => {
  let component: Com5Component;
  let fixture: ComponentFixture<Com5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
