import { TestBed } from '@angular/core/testing';

import { HomeBaseService } from './home-base.service';

describe('HomeBaseService', () => {
  let service: HomeBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
