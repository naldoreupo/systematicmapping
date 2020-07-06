/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PicoComponent } from './pico.component';

describe('PicoComponent', () => {
  let component: PicoComponent;
  let fixture: ComponentFixture<PicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
