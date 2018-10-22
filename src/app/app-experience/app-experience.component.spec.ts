import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExperienceComponent } from './app-experience.component';

describe('AppTopNavComponent', () => {
  let component: AppExperienceComponent;
  let fixture: ComponentFixture<AppExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
