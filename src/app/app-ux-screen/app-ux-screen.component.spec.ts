import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppUxScreenComponent} from './app-ux-screen.component';

describe('AppUxScreenComponent', () => {
  let component: AppUxScreenComponent;
  let fixture: ComponentFixture<AppUxScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUxScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
