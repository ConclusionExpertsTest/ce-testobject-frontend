import { TestBed } from '@angular/core/testing';

import { WorkingConditionsService } from './working-conditions.service';

describe('WorkingConditionsService', () => {
  let service: WorkingConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
