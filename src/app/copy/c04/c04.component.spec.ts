import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com4Component } from './com4.component';

describe('Com4Component', () => {
  let component: Com4Component;
  let fixture: ComponentFixture<Com4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
