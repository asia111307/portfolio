import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJumbotronComponent } from './app-jumbotron.component';

describe('AppJumbotronComponent', () => {
  let component: AppJumbotronComponent;
  let fixture: ComponentFixture<AppJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
