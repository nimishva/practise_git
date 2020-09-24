import { TestBed } from '@angular/core/testing';

import { ApiMainService } from './api-main.service';

describe('ApiMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMainService = TestBed.get(ApiMainService);
    expect(service).toBeTruthy();
  });
});
