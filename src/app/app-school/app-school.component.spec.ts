import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSchoolComponent } from './app-school.component';

describe('AppSchoolComponent', () => {
  let component: AppSchoolComponent;
  let fixture: ComponentFixture<AppSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
