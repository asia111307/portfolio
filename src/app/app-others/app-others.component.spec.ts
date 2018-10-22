import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOthersComponent } from './app-others.component';

describe('AppothersComponent', () => {
  let component: AppOthersComponent;
  let fixture: ComponentFixture<AppOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
