import {TestBed, inject} from '@angular/core/testing';

import {ChangeLangService} from './change-lang.service';

describe('ChangeLangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeLangService]
    });
  });

  it('should be created', inject([ChangeLangService], (service: ChangeLangService) => {
    expect(service).toBeTruthy();
  }));
});
