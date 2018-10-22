import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppGraphicsComponent, AppHGraphicsComponent} from './app-graphics.component';

describe('AppGraphicsComponent', () => {
  let component: AppGraphicsComponent;
  let fixture: ComponentFixture<AppGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
