/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViloesComponent } from './Viloes.component';

describe('ViloesComponent', () => {
  let component: ViloesComponent;
  let fixture: ComponentFixture<ViloesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViloesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
