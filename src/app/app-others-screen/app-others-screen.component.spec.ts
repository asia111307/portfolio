import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOthersScreenComponent } from './app-others-screen.component';

describe('AppOthersScreenComponent', () => {
  let component: AppOthersScreenComponent;
  let fixture: ComponentFixture<AppOthersScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOthersScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOthersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
