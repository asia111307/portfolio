import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResearchComponent } from './app-research.component';

describe('AppResearchComponent', () => {
  let component: AppResearchComponent;
  let fixture: ComponentFixture<AppResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
