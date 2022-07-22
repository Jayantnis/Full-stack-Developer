/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Directives_setComponent } from './directives_set.component';

describe('Directives_setComponent', () => {
  let component: Directives_setComponent;
  let fixture: ComponentFixture<Directives_setComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Directives_setComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Directives_setComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
