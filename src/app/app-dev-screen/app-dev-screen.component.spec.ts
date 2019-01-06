import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevScreenComponent } from './app-dev-screen.component';

describe('AppDevScreenComponent', () => {
  let component: AppDevScreenComponent;
  let fixture: ComponentFixture<AppDevScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDevScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDevScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
