import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUxComponent } from './app-ux.component';

describe('AppUxComponent', () => {
  let component: AppUxComponent;
  let fixture: ComponentFixture<AppUxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
